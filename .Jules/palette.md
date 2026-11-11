# Palette's UX Journal

## 2026-11-11 - Card-styled Accordion ARIA & Focus Enclosure
**Learning:** For card-styled accordion lists with rounded corners and subtle background pills, putting standard outline or ring styles on the inner trigger button can cause awkward clipping or misaligned focus rings against the outer card border. Applying `focus-within:ring-2 focus-within:ring-navy` on the outer card container with `focus:outline-none` on the button trigger cleanly encloses the full component boundary while preserving clear visual focus for keyboard navigation. Pairing this with W3C ARIA accordion patterns (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) ensures seamless screen reader accessibility.
**Action:** When building or enhancing card-based expandable widgets, place the focus indicator on the bounding container with `focus-within` and link triggers and regions with synchronized ARIA IDs.
