## 2025-05-18 - Accordion ARIA & Focus Visual Feedback
**Learning:** Interactive accordion elements in landing pages often lack full keyboard accessibility and screen reader support (`aria-expanded`, `aria-controls`, `role="region"`). Using `focus-within:ring-2 focus-within:ring-inset` on the container card provides high-contrast keyboard feedback without visual clipping.
**Action:** Always include complete ARIA attributes on accordion triggers/panels and ensure focus indicators are visible with inset rings.
