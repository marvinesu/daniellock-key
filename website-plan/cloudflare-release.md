# Cloudflare release

- Host: `daniels.webxni.com`
- Source commit: `d0ef8d7`
- Deployed version: `49473d94-ce13-48b4-8961-fdbb4758a3b1`
- Verified preview: `https://final-audit-20260819-daniels-lock-key-preview.emarketwizdigit.workers.dev/`
- Rollback version: `76d9a2d3-0f1b-48e1-8a2c-216f8304c27b`
- Verified: 2026-08-19

The exact version above was inspected on the noindex preview and then promoted at 100%. The temporary `webxni.com` hostname remains `noindex,nofollow` until the approved primary-domain cutover. Roll back with Wrangler to the recorded prior version and repeat the public smoke checks before restoring traffic.
