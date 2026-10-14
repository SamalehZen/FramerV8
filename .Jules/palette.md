## 2025-02-18 - Accordion & Mobile Navigation ARIA Controls & Focus Insets
**Learning:** Interactive collapsible components (accordions, mobile navigation menus) require full ARIA pattern properties (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) for screen reader support. Using `focus-visible:ring-inset` on rounded container buttons avoids visual outline clipping and layout shifts during keyboard focus state transition.
**Action:** Always include semantic ARIA attributes and inset focus rings on expandable toggle controls.
