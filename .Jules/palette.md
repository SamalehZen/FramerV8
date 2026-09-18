## 2025-05-18 - Accordion ARIA Patterns and Focus Ring Styling
**Learning:** Interactive accordion elements require full ARIA disclosure pattern implementation (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) to communicate expandable content regions to screen readers. For padded container components, using `focus-visible:ring-inset` prevents visual clipping and unnecessary layout shifts when focused via keyboard.
**Action:** Always include full ARIA accessibility controls and inset focus indicator rings on toggle components like accordions and collapsible panels.
