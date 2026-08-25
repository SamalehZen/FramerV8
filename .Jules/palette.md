## 2025-05-18 - Accordion ARIA & Focus Ring Standards

**Learning:** Interactive accordion elements require full ARIA accessibility (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) for screen reader clarity, plus high-contrast inset focus indicators (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-inset`) to ensure clear keyboard navigation without visual clipping.
**Action:** When creating or updating collapsible interactive controls, always bind button controls to panel regions via unique IDs and apply inset focus-visible ring styles.
