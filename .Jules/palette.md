## 2026-09-04 - Accordion Accessibility & Focus Ring Inset

**Learning:** Accordion components missing `aria-expanded`, `aria-controls`, `role="region"`, and `aria-labelledby` prevent assistive technology from communicating state and structural relationships. In addition, interactive buttons inside padded containers with rounded borders need `focus-visible:ring-inset` to avoid focus ring visual clipping and layout shifts.
**Action:** Always provide full WAI-ARIA accordion relationships (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and high-contrast `focus-visible:ring-inset` focus feedback for expandable containers.
