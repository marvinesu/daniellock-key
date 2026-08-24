interface Env{ASSETS:{fetch(request:Request):Promise<Response>};EMAIL?:{send(message:{to?:string;from:string;subject:string;text:string;replyTo?:string}):Promise<unknown>};LEAD_RATE_LIMITER?:{limit(options:{key:string}):Promise<{success:boolean}>};LEAD_WEBHOOK_URL?:string;ALLOWED_ORIGIN?:string}
const json=(body:unknown,status=200,extra:Record<string,string>={})=>new Response(JSON.stringify(body),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff','x-robots-tag':'noindex, nofollow',...extra}});
const contactKey=async(value:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value.trim().toLowerCase()))),byte=>byte.toString(16).padStart(2,'0')).join('');
export default{async fetch(request:Request,env:Env):Promise<Response>{
 const url=new URL(request.url);
 const canonicalHost='danielslockkey.com';
 if(url.hostname!==canonicalHost){const target=new URL(request.url);target.protocol='https:';target.hostname=canonicalHost;target.port='';return new Response(null,{status:308,headers:{location:target.toString(),'x-robots-tag':'noindex, nofollow','cache-control':'public, max-age=300'}})}
 const redirects:Record<string,string>={'/services/home-lockout/':'/house-lockout/','/services/residential-rekeying/':'/residential-rekeying/','/services/lock-repair/':'/lock-repair/','/services/landlord-rekeying/':'/landlord-rekeying/','/services/commercial-lock-service/':'/commercial-lockout/','/services/car-lockout/':'/car-lockout/','/vehicle-lockout/':'/car-lockout/','/keys-locked-in-car/':'/car-lockout/','/emergency-vehicle-entry/':'/car-lockout/'};
 if(redirects[url.pathname])return Response.redirect(new URL(redirects[url.pathname],url),301);
 if(url.pathname!='/api/leads'){const asset=await env.ASSETS.fetch(request);const response=new Response(asset.body,asset);response.headers.set('x-content-type-options','nosniff');response.headers.set('referrer-policy','strict-origin-when-cross-origin');return response}
 if(request.method!=='POST')return json({error:'Method not allowed'},405,{allow:'POST'});
 if(request.headers.get('origin')!==(env.ALLOWED_ORIGIN||url.origin))return json({error:'Origin not allowed'},403);
 if(!(request.headers.get('content-type')||'').startsWith('application/json'))return json({error:'Send JSON'},415);
 const raw=await request.text();if(new TextEncoder().encode(raw).byteLength>12000)return json({error:'Request too large'},413);
 let body:any;try{body=JSON.parse(raw)}catch{return json({error:'Invalid request'},400)}
 const clean=(v:unknown,n=400)=>String(v||'').trim().slice(0,n);
 if(body.website)return json({ok:true});
 const lead={name:clean(body.name,100),phone:clean(body.phone,30),service:clean(body.service,100),location:clean(body.location,120),details:clean(body.details,1500),consent:body.consent===true,page:clean(body.page,240)};
 if(!lead.name||!/^[+\d ()-]{7,20}$/.test(lead.phone)||!lead.service||!lead.location||!lead.details||!lead.consent)return json({error:'Please complete all required fields.'},400);
 if(!env.LEAD_RATE_LIMITER)return json({error:'Online requests are temporarily unavailable. Please call us.'},503);
 try{const rate=await env.LEAD_RATE_LIMITER.limit({key:`lead:${await contactKey(lead.phone)}`});if(!rate.success)return json({error:'Too many requests. Please call us.'},429,{'retry-after':'60'})}catch(e){console.error('[lead] Rate limiter unavailable',e);return json({error:'Online requests are temporarily unavailable. Please call us.'},503)}
 const delivered={...lead,submittedAt:new Date().toISOString()};try{if(env.EMAIL){await env.EMAIL.send({to:'emarketwizdigit@gmail.com',from:'website-leads@webxni.com',subject:`[Daniel's Lock & Key lead] ${lead.service} — ${lead.name}`,text:Object.entries(delivered).map(([k,v])=>`${k}: ${v}`).join('\n')})}else if(env.LEAD_WEBHOOK_URL){const sent=await fetch(env.LEAD_WEBHOOK_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(delivered)});if(!sent.ok)throw new Error(`Webhook status ${sent.status}`)}else return json({error:'Online requests are being connected. Please call us.'},503)}catch(e){console.error('[lead] Delivery failed',e);return json({error:'Delivery failed. Please call us.'},502)}return json({ok:true});
}};
