import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const component = readFileSync(new URL('../src/components/AccessibilityMenu.astro', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8');

describe('custom accessibility toolbar', () => {
  it('provides the dialog trigger, controls, and keyboard behavior', () => {
    expect(component).toContain('aria-haspopup="dialog"');
    expect(component).toContain('aria-controls="a11y-panel"');
    expect(component).toContain('role="dialog"');
    expect(component).toContain("event.key === 'Escape'");
    expect(component).toContain("event.key !== 'Tab'");
    expect(component).toContain('Reset all settings');
  });

  it('persists every feature under one key and supports Astro navigation', () => {
    expect(component).toContain("const KEY = 'a11y-preferences'");
    expect(component).toContain("document.addEventListener('DOMContentLoaded'");
    expect(component).toContain("document.addEventListener('astro:page-load'");
    for (const className of ['a11y-large-text', 'a11y-high-contrast', 'a11y-readable-font', 'a11y-highlight-links', 'a11y-reduce-motion']) {
      expect(component).toContain(className);
    }
  });

  it('is mounted globally and restores preferences in the head', () => {
    expect(layout).toMatch(/import AccessibilityMenu from ["']\.\.\/components\/AccessibilityMenu\.astro["']/);
    expect(layout).toMatch(/<AccessibilityMenu\s*\/>/);
    expect(layout).toContain("localStorage.getItem('a11y-preferences')");
  });
});
