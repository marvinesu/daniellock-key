interface Env{ASSETS:{fetch(request:Request):Promise<Response>};EMAIL?:{send(message:{to?:string;from:string;subject:string;text:string;replyTo?:string}):Promise<unknown>};LEAD_WEBHOOK_URL?:string;ALLOWED_ORIGIN?:string}
const json=(body:unknown,status=200,extra:Record<string,string>={})=>new Response(JSON.stringify(body),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff',...extra}});
export default{async fetch(request:Request,env:Env):Promise<Response>{
 const url=new URL(request.url);
 if(url.pathname!='/api/leads'){const asset=await env.ASSETS.fetch(request);const response=new Response(asset.body,asset);response.headers.set('x-content-type-options','nosniff');response.headers.set('referrer-policy','strict-origin-when-cross-origin');if(url.hostname!=='danielslockkey.com')response.headers.set('x-robots-tag','noindex,nofollow');return response}
 if(request.method!=='POST')return json({error:'Method not allowed'},405,{allow:'POST'});
 if(request.headers.get('origin')!==(env.ALLOWED_ORIGIN||url.origin))return json({error:'Origin not allowed'},403);
 if(!(request.headers.get('content-type')||'').startsWith('application/json'))return json({error:'Send JSON'},415);
 const raw=await request.text();if(new TextEncoder().encode(raw).byteLength>12000)return json({error:'Request too large'},413);
 let body:any;try{body=JSON.parse(raw)}catch{return json({error:'Invalid request'},400)}
 const clean=(v:unknown,n=400)=>String(v||'').trim().slice(0,n);
 if(body.website)return json({ok:true});
 const lead={name:clean(body.name,100),phone:clean(body.phone,30),service:clean(body.service,100),location:clean(body.location,120),details:clean(body.details,1500),consent:body.consent===true,page:clean(body.page,240)};
 if(!lead.name||!/^[+\d ()-]{7,20}$/.test(lead.phone)||!lead.service||!lead.location||!lead.details||!lead.consent)return json({error:'Please complete all required fields.'},400);
 const delivered={...lead,submittedAt:new Date().toISOString()};try{if(env.EMAIL){await env.EMAIL.send({to:'marvin@webxni.com',from:'website-leads@webxni.com',subject:`[Daniel's Lock & Key lead] ${lead.service} — ${lead.name}`,text:Object.entries(delivered).map(([k,v])=>`${k}: ${v}`).join('\n')})}else if(env.LEAD_WEBHOOK_URL){const sent=await fetch(env.LEAD_WEBHOOK_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(delivered)});if(!sent.ok)throw new Error(`Webhook status ${sent.status}`)}else return json({error:'Online requests are being connected. Please call us.'},503)}catch(e){console.error('[lead] Delivery failed',e);return json({error:'Delivery failed. Please call us.'},502)}return json({ok:true});
}};
