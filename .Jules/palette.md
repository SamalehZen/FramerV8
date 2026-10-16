## 2025-05-18 - Accordion ARIA Controls & Focus Ring Inset
**Learning:** Interactive accordion components in container cards require semantic WAI-ARIA controls (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and `focus-visible:ring-inset` to provide high-contrast focus feedback without causing visual clipping or layout shifts inside padded containers.
**Action:** Always pair `aria-expanded` and `aria-controls` on expand/collapse toggles with `focus-visible:ring-2 focus-visible:ring-inset` for clean, unclipped focus indicators on bounded card headers.
