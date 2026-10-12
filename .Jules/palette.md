## 2026-10-12 - Inset Focus Rings for Padded Accordion Containers
**Learning:** Interactive accordion buttons nested within padded container cards require `focus-visible:ring-2 focus-visible:ring-inset` to ensure high-contrast focus feedback without incurring visual clipping or layout shifts at container boundaries.
**Action:** Always include full ARIA semantic linkages (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) paired with `focus-visible:ring-inset` on accordion toggles in custom UI designs.
