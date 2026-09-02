## 2025-05-18 - Accordion ARIA & Focus Ring Accessibility Pattern
**Learning:** Accordion components built using custom `button` and `motion.div` structures lack standard screen-reader associations and visible keyboard focus styling unless explicitly wired with WAI-ARIA disclosure attributes and inset focus rings.
**Action:** Always provide `aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`, and high-contrast `focus-visible:ring-inset` on custom interactive components.
