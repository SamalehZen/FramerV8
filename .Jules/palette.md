## 2025-05-18 - Accordion ARIA & Focus State Standards
**Learning:** Accordion components built with custom React state require explicit WAI-ARIA properties (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and visible `focus-visible` styling to be accessible to screen readers and keyboard users.
**Action:** When implementing custom interactive expandable/collapsible elements, always pair trigger buttons with unique element IDs linked to panel regions and ensure keyboard focus rings are visible.
