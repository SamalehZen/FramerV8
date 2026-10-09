## 2025-10-09 - FAQ Accordion Accessibility & Focus Ring
**Learning:** Collapsible accordion controls require explicit WAI-ARIA bindings (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and high-contrast focus rings (`focus-visible:ring-inset`) to ensure keyboard navigability and screen-reader context without causing overflow clipping.
**Action:** Always verify accordion components have full ARIA attributes linking trigger buttons to content regions, and apply `focus-visible:ring-inset` for clean, unclipped focus indicators.
