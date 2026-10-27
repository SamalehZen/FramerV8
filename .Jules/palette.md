## 2026-10-27 - FAQ Accordion Keyboard Navigation and ARIA
**Learning:** Using `focus-visible:ring-inset` on padded accordion header buttons provides clean keyboard focus indicators without layout shifts or edge clipping. Adding explicit ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) makes Framer Motion animated accordions screen-reader accessible.
**Action:** Always include semantic ARIA attributes and inset focus rings on custom animated accordion components.
