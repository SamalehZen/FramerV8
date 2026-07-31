# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-07-31 - [Keyboard & ARIA Support for Accordions]
**Learning:** For interactive UI structures like FAQ accordions, semantic HTML and ARIA roles (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) are critical for assistive technology compatibility. Additionally, high-contrast keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2`) are necessary for keyboard-only navigation. Utilizing negative margin and padding adjustments prevents layout shifts during focus events.
**Action:** Always implement robust ARIA state bindings alongside visible `focus-visible` ring parameters and layout shift protections on any custom toggles or collapsible containers.
