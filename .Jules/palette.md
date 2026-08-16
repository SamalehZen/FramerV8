# Palette's Journal

## 2025-05-18 - Framer Motion Accordion ARIA & Focus Alignment
**Learning:** Animated accordions using Framer Motion require explicit `aria-expanded` and `aria-controls` on the trigger buttons alongside `role="region"` and `aria-labelledby` on motion containers so screen readers properly announce content toggle states. Pairing this with `focus-visible:ring-2` on the trigger button ensures keyboard navigability without introducing unwanted focus rings during mouse interactions.
**Action:** Always link accordion trigger buttons and content regions via `id`, `aria-controls`, and `aria-labelledby`, and apply `focus-visible:ring-2` focus states to interactive toggles.
