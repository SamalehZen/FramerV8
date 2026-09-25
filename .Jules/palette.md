## 2026-09-25 - Accordion Accessibility & Focus Styling

**Learning:** Interactive accordion components need semantic ARIA controls (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) to announce state changes to screen readers. For keyboard navigation, interactive elements inside padded cards require inset focus rings (`focus-visible:ring-inset`) to prevent ring clipping and layout shifts.
**Action:** When building interactive accordion or expandable list items, always include matching ARIA header/panel pairs and inset focus visible indicators.
