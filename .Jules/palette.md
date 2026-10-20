## 2025-05-18 - Accordion ARIA & Focus Navigation
**Learning:** Accordion components like the FAQ require proper `aria-expanded`, `aria-controls`, `role="region"`, and `aria-labelledby` attributes for screen readers, along with high-contrast `focus-visible` ring styling using `focus-visible:ring-inset` to avoid visual overflow on padded card containers.
**Action:** When building interactive expandable items or accordions, ensure full ARIA roles/IDs are mapped and add inset focus-visible rings to ensure keyboard users have clear visual focus indicators.
