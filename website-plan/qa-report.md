# QA report

Verified 2026-08-19 on commit `23b549a` and deployed version `efe8c9a9-3c2d-4927-8a39-92ae095e950a`.

- 17/17 automated tests passed.
- Astro check and 46-route production build passed with no diagnostics.
- Local-service preflight: 37 passed, 2 informational findings, 0 errors. The remaining findings are generated-sitemap verification and optional IndexNow integration.
- Exact preview and live HTTP checks passed for the homepage, home-lockout service, service-area hub, 404 behavior, official logo, and `/api/leads` method handling.
- The mobile homepage has one H1, six telephone paths, nine images, no chatbot, no horizontal overflow, and a persistent call-first conversion path.
- The representative service page has one H1 and nine contextual images; the service-area hub has a named Leaflet map with nine location markers.
- The temporary hostname intentionally returns `noindex,nofollow`; production indexing awaits the future `danielslockkey.com` cutover.
- In-app navigation to the temporary hostname can be blocked by a client-side browser filter; the exact Workers preview renders correctly and direct HTTP checks return 200.
- Cloudflare's account API confirms the configured destination `emarketwizdigit@gmail.com` is verified; the public website contact identity is unchanged.
- Clearly labelled synthetic preview and production requests both returned `200 {"ok":true}` after exact-version promotion. This verifies Worker acceptance and Email Routing handoff; final inbox placement was not independently opened in this release check.
- API responses now include `X-Robots-Tag: noindex, nofollow` as well as the temporary website hostname.
