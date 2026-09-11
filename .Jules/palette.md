## 2025-05-18 - Accordion ARIA & Focus States
**Learning:** Accordion components in landing page templates often lack standard keyboard focus rings and WAI-ARIA associations (`aria-expanded`, `aria-controls`, `role="region"`), hindering screen reader navigation and keyboard usability.
**Action:** Always verify accordion toggle buttons include proper `aria-expanded` and `aria-controls` bindings pointing to content panels with `role="region"`, and apply high-contrast inset focus rings (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-inset`).
