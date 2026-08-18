import {describe,expect,it} from 'vitest';import {readFileSync,existsSync,statSync} from 'node:fs';import {services,site} from '../src/data/site';import {residentialDetails,commercialDetails} from '../src/data/serviceArchitecture';
const read=(path:string)=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
describe("Daniel's Lock & Key release contract",()=>{
 it('publishes six carefully scoped services',()=>expect(services).toHaveLength(6));
 it('publishes problem-specific residential and selected commercial routes',()=>{expect(residentialDetails).toHaveLength(9);expect(commercialDetails).toHaveLength(5);const dynamic=read('src/pages/[detail].astro');expect(dynamic).toContain('residentialDetails');expect(dynamic).toContain('commercialDetails')});
 it('ships canonical hubs, vehicle aliases, and one qualified location page',()=>{['all-services.astro','residential.astro','commercial.astro','car-lockout.astro','resources.astro','hollywood.astro'].forEach(p=>expect(existsSync(new URL(`../src/pages/${p}`,import.meta.url))).toBe(true));const worker=read('worker/index.ts');['/vehicle-lockout/','/keys-locked-in-car/','/emergency-vehicle-entry/'].forEach(route=>expect(worker).toContain(route))});
 it('uses an independent text-mark system without third-party icon attribution',()=>{const shell=read('src/layouts/BaseLayout.astro');expect(shell).not.toContain('Flaticon');expect(shell).not.toContain('icons.css')});
 it('uses the verified public license number',()=>expect(site.license).toContain('LCO 8506'));
 it('does not publish the operational apartment address for this service-area business',()=>expect(read('src/data/site.ts')).not.toContain('6220 Selma Ave'));
 it('includes the reference architecture',()=>['about.astro','guides/index.astro','guides/proof-of-authorization.astro','guides/how-locksmith-service-works.astro','guides/lockout-checklist.astro'].forEach(p=>expect(existsSync(new URL(`../src/pages/${p}`,import.meta.url))).toBe(true)));
 it('keeps call access and license disclosure in the shell',()=>{const s=read('src/layouts/BaseLayout.astro');expect(s.match(/tel:\$\{site\.phoneHref\}/g)?.length).toBeGreaterThanOrEqual(4);expect(s).toMatch(/site\.license/)});
 it('ships a single accessible call-first floating action without chat',()=>{const s=read('src/layouts/BaseLayout.astro');expect(s).toContain('class="floating-call"');expect(s).toMatch(/aria-label=\{`Call Daniel/);expect(s).not.toContain('data-assistant')});
 it('requires consent and protects sensitive data',()=>{const s=read('src/components/LeadForm.astro');expect(s).toMatch(/name="consent" required/);expect(s).toMatch(/identity documents/i)});
 it('uses validated Cloudflare email delivery',()=>{const s=read('worker/index.ts');expect(s).toMatch(/Origin not allowed/);expect(s).toMatch(/Request too large/);expect(s).toMatch(/env\.EMAIL/);expect(read('wrangler.jsonc')).toContain('marvin@webxni.com')});
 it('keeps preview pages out of search',()=>expect(read('worker/index.ts')).toContain('noindex,nofollow'));
 it('includes substantial responsive photography',()=>['locksmith-hero.webp','locksmith-square.webp','locksmith-mobile.webp'].forEach(p=>expect(statSync(new URL(`../public/images/${p}`,import.meta.url)).size).toBeGreaterThan(30000)));
});
