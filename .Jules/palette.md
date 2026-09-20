## 2025-05-18 - Accordion Accessibility & Focus Inset Styling
**Learning:** Interactive accordion elements require proper WAI-ARIA controls (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) for screen reader support. Using `focus-visible:ring-inset` on padded trigger elements prevents focus rings from clipping or causing layout shifts.
**Action:** Always link accordion trigger buttons with content regions via unique IDs, and pair `focus-visible` with `ring-inset` on rounded cards.
