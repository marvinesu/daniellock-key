import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const excludedPaths=['/services/','/hollywood/'];
export default defineConfig({site:process.env.PUBLIC_SITE_URL||'https://danielslockkey.com',integrations:[sitemap({filter:(page)=>!excludedPaths.some((path)=>new URL(page).pathname.startsWith(path))})]});
