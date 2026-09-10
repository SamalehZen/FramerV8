## 2025-02-18 - Accordion ARIA & Focus Feedback
**Learning:** Custom interactive accordions built with Framer Motion and buttons require explicit `aria-expanded`, `aria-controls`, `role="region"`, and `aria-labelledby` semantics along with `focus-visible:ring-inset` for keyboard accessibility and visual context.
**Action:** Always pair `aria-expanded` and `aria-controls` with high-contrast inset focus rings (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-inset`) on expandable button headers.
