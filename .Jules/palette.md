## 2025-02-23 - FAQ Accordion WAI-ARIA and Keyboard Focus Support
**Learning:** Accordion components using custom button layouts require explicit WAI-ARIA mapping (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and inset focus rings (`focus-visible:ring-inset`) to prevent clipping within rounded card wrappers.
**Action:** Always include semantic ARIA attributes and inset focus rings on custom interactive disclosure controls.
