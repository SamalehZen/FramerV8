## 2025-05-18 - Accordion ARIA & Focus States
**Learning:** Interactive accordion components require full ARIA relationship attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and explicit `focus-visible` ring styles to ensure seamless keyboard navigation and screen reader compatibility.
**Action:** Always map trigger buttons to content regions via matching IDs and apply `focus-visible:ring-2 focus-visible:ring-inset` on rounded containers to avoid visual clipping during keyboard tabbing.
