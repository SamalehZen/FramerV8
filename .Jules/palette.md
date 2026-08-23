## 2025-05-18 - Accordion ARIA & Keyboard Focus Feedback

**Learning:** Accordion components need comprehensive ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) for screen reader usability, along with explicit high-contrast keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2`). Adding negative horizontal margin and matching padding (`px-3 -mx-3`) prevents focus rings from suffering from visual clipping or layout shifts when focused via keyboard navigation.
**Action:** When adding keyboard focus states to padded container buttons or accordions in styled cards, adjust padding/margins or container overflow to ensure focus rings render cleanly without causing layout reflow.
