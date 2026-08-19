# Accessibility plan

Target: WCAG 2.2 AA for the public Daniel's Lock & Key Service call-first website.

## Baseline

- Keep the phone action, navigation, service information, and authorization guidance available in semantic initial HTML.
- Provide a skip link, logical landmarks/headings, visible focus, descriptive links, labelled forms, and honest live status messages.
- Use one stationary call-first floating control. It must not collide with the accessibility control, mobile navigation, form fields, browser chrome, or focused content.
- The first-party accessibility dialog provides bigger text, token-based high contrast, readable font, highlighted links, paused animations, and reset. It supplements rather than replaces accessible markup.
- The settings panel is a native modal dialog with Escape/close behavior, focus containment, and focus return. Preferences apply before paint and persist across reload/navigation.
- Remove large or continuous non-essential movement under both the operating-system preference and the in-page pause setting.

## Required evidence

- Keyboard-only navigation and focus return on home, menu, call links, forms, map controls, and accessibility dialog.
- 320 CSS px reflow, 200% zoom, increased text spacing, high contrast, combined preferences, reload, corrupted storage, and reset.
- Narrow-mobile collision checks at 390×844 and 320×568.
- Form validation/failure behavior without submitting personal data; approved end-to-end delivery remains a separate owner-authorized production test.

No third-party accessibility overlay is permitted.
