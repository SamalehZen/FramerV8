## 2025-05-18 - Accordion ARIA & Keyboard Focus Feedback
**Learning:** Accordions without explicit ARIA relationships (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) prevent assistive technologies from recognizing panel state changes, and default outer focus rings cause clipping or layout shifts on padded containers.
**Action:** Always couple accordion trigger buttons with content regions via matching IDs and ARIA attributes, and apply `focus-visible:ring-inset` for clean, high-contrast keyboard focus indicators without container clipping.
