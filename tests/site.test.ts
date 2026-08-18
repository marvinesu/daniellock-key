import {describe,expect,it} from 'vitest';import {readFileSync,existsSync,statSync} from 'node:fs';import {services,site} from '../src/data/site';
const read=(path:string)=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
describe("Daniel's Lock & Key release contract",()=>{
 it('publishes six carefully scoped services',()=>expect(services).toHaveLength(6));
 it('uses the verified public license number',()=>expect(site.license).toContain('LCO 8506'));
 it('does not publish a street address',()=>expect(read('src/data/site.ts')).not.toMatch(/\d{3,5}\s+[A-Z][a-z]+\s+(Street|St|Avenue|Ave|Boulevard|Blvd)/));
 it('includes the reference architecture',()=>['about.astro','guides/index.astro','guides/proof-of-authorization.astro','guides/how-locksmith-service-works.astro','guides/lockout-checklist.astro'].forEach(p=>expect(existsSync(new URL(`../src/pages/${p}`,import.meta.url))).toBe(true)));
 it('keeps call access and license disclosure in the shell',()=>{const s=read('src/layouts/BaseLayout.astro');expect(s.match(/tel:\$\{site\.phoneHref\}/g)?.length).toBeGreaterThanOrEqual(4);expect(s).toMatch(/site\.license/)});
 it('ships an accessible deterministic assistant',()=>{const s=read('src/layouts/BaseLayout.astro');expect(s).toMatch(/aria-expanded/);expect(s).toMatch(/Escape/);expect(s).toMatch(/Start over/)});
 it('requires consent and protects sensitive data',()=>{const s=read('src/components/LeadForm.astro');expect(s).toMatch(/name="consent" required/);expect(s).toMatch(/identity documents/i)});
 it('uses validated Cloudflare email delivery',()=>{const s=read('worker/index.ts');expect(s).toMatch(/Origin not allowed/);expect(s).toMatch(/Request too large/);expect(s).toMatch(/env\.EMAIL/);expect(read('wrangler.jsonc')).toContain('marvin@webxni.com')});
 it('keeps preview pages out of search',()=>expect(read('worker/index.ts')).toContain('noindex,nofollow'));
 it('includes substantial responsive photography',()=>['locksmith-hero.webp','locksmith-square.webp','locksmith-mobile.webp'].forEach(p=>expect(statSync(new URL(`../public/images/${p}`,import.meta.url)).size).toBeGreaterThan(30000)));
});
