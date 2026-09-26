## 2025-05-15 - FAQ Accordion Accessibility & Focus Inset Styling
**Learning:** Accordion headers require explicit WAI-ARIA linkages (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) for screen readers to recognize state changes. When adding focus rings to rounded container buttons with internal padding, `focus-visible:ring-inset` prevents ring clipping and layout shifts.
**Action:** Always pair `aria-expanded` and `aria-controls` on disclosure triggers and use inset focus rings for padded full-width interactive cards.
