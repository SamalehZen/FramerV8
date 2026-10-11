## 2025-02-18 - Accordion ARIA & Focus Ring Inset Pattern
**Learning:** Interactive accordion buttons embedded within rounded padded cards need explicit ARIA semantics (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and inset focus rings (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-inset`) to ensure screen reader support and prevent visual focus ring clipping or layout shifts.
**Action:** Always pair `aria-expanded` and `aria-controls` on disclosure triggers with `focus-visible:ring-inset` on padded container buttons.
