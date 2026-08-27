## 2026-08-27 - FAQ Accordion ARIA & Focus-Visible Rings
**Learning:** Accordion toggles require semantic ARIA relationships (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) for screen reader clarity, along with inset focus rings (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-inset`) on padded containers to prevent focus clipping and layout shifts.
**Action:** Always include full ARIA accordion attributes and inset focus rings on expandable toggle buttons embedded within rounded containers.
