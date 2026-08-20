# Cloudflare release

- Host: `daniels.webxni.com`
- Source commit: `7186a27`
- Deployed version: `3e16a096-5bb0-437d-8fad-390ced696cd9`
- Verified preview: `https://3e16a096-daniels-lock-key-preview.emarketwizdigit.workers.dev/`
- Rollback version: `efe8c9a9-3c2d-4927-8a39-92ae095e950a`
- Verified: 2026-08-19

The exact version above was inspected on the noindex preview and then promoted at 100%. It adds the native `LEAD_RATE_LIMITER` binding in unique namespace `26081905`, limited to four validated submissions per 60 seconds using a SHA-256 phone digest. Preview and production each returned 200 for the homepage, 400 for invalid input, and `200 {"ok":true}` for a labelled synthetic delivery test. The temporary `webxni.com` hostname remains `noindex,nofollow` until the approved primary-domain cutover. Roll back with `wrangler versions deploy efe8c9a9-3c2d-4927-8a39-92ae095e950a@100% --yes` and repeat the public smoke and delivery checks.
