# Cloudflare release

- Host: `daniels.webxni.com`
- Source commit: `23b549a`
- Deployed version: `efe8c9a9-3c2d-4927-8a39-92ae095e950a`
- Verified preview: `https://efe8c9a9-daniels-lock-key-preview.emarketwizdigit.workers.dev/`
- Rollback version: `49473d94-ce13-48b4-8961-fdbb4758a3b1`
- Verified: 2026-08-19

The exact version above was inspected on the noindex preview and then promoted at 100%. The temporary `webxni.com` hostname remains `noindex,nofollow` until the approved primary-domain cutover. Roll back with Wrangler to the recorded prior version and repeat the public smoke checks before restoring traffic.
