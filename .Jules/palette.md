## 2026-10-28 - Accordion Keyboard Focus & ARIA Regions
**Learning:** Accordion components using rounded padded card containers can clip focus outlines or cause unexpected layout shifts if outer focus rings are used.
**Action:** Apply `focus-visible:ring-2 focus-visible:ring-inset` on accordion trigger buttons with explicit `aria-expanded`, `aria-controls`, `role="region"`, and `aria-labelledby` linkages.
