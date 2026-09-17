## 2025-05-18 - Accordion ARIA & Focus Ring Standards
**Learning:** Collapsible accordion components using framer-motion require proper WAI-ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) so screen readers properly announce expand/collapse state and region relationships. Additionally, using `focus-visible:ring-inset` on padded container elements avoids visual clipping and layout shifts during keyboard navigation.
**Action:** Always pair Framer Motion expandables with proper semantic ARIA attributes and inset focus rings on accordion trigger buttons.
