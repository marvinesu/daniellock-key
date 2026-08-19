# Motion plan

Level: expressive but call-first.

- Hero choreography establishes message order while the call CTA remains immediately available.
- Navigation, buttons, service cards, and form states use short feedback transitions.
- Section/media reveals add spatial continuity without hiding initial HTML.
- The floating phone control may use a brief periodic attention cue; the icon and control must remain stable while activated and all continuous motion stops under reduced motion.
- The accessibility trigger remains stationary.

Motion must not delay emergency information, phone access, authorization requirements, or form errors.
*** Add File: C:\Users\marvinesu\Documents\Codex\2026-08-17\w\work\websites\danielslockkey\website-plan\qa-report.md
# QA report

Status: in progress.

- Passed: repository baseline includes semantic HTML, persistent call action, reduced-motion CSS, and first-party accessibility preferences.
- Remediated: the settings panel is now a native modal dialog instead of a non-modal focus trap.
- Remediated: high contrast uses project tokens and targeted colors rather than a whole-page filter.
- Pending: full browser verification at desktop, 390×844, 320×568, 200% zoom, increased text spacing, combined settings, keyboard, map, and form failure states.
- Pending: approved end-to-end email delivery observation.
- Pending: deployed version/SHA, live-domain headers/logs, and executable rollback evidence.
*** Add File: C:\Users\marvinesu\Documents\Codex\2026-08-17\w\work\websites\danielslockkey\website-plan\cloudflare-release.md
# Cloudflare release record

Worker: `daniels-lock-key-preview`

Domain: `daniels.webxni.com`

Release gate:

1. Run tests, Astro diagnostics, production build, local-service preflight, secret scan, dependency audit, and Wrangler dry run.
2. Verify representative home, service, location, map, form, 404, keyboard, accessibility, and narrow-mobile behavior.
3. Deploy the exact Git commit.
4. Verify the live domain, noindex/canonical policy, browser console, active Worker version, and rollback target.

Upload success alone is not production verification. Evidence will be appended after deployment.
