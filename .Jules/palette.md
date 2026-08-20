## 2026-08-20 - FAQ Accordion Accessibility & Focus Outline
**Learning:** Collapsible accordion UI patterns frequently lack WAI-ARIA associations (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and visible keyboard focus states, making them non-compliant for screen readers and keyboard users.
**Action:** Always provide explicit IDs linking trigger buttons and collapsible content regions, and apply Tailwind `focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2` to accordion toggle buttons.
