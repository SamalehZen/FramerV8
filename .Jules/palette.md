# Palette's Journal

## 2025-05-20 - Accordion Accessibility & Focus Inset in Card Containers
**Learning:** In card-style accordion components, interactive button targets require proper ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and `focus-visible:ring-inset` to prevent visual clipping against outer container bounds.
**Action:** Always pair Framer Motion accordion panels with semantic ARIA controls and apply `ring-inset` on full-width inner button targets.
