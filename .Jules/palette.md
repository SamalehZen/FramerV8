## 2025-05-18 - Accordion ARIA & Focus Feedback
**Learning:** Accordion controls require full semantic ARIA relationships (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) so screen readers properly communicate collapsible content states. Additionally, applying `focus-visible:ring-inset` on padded trigger elements prevents visual ring clipping and layout shifts during keyboard navigation.
**Action:** Always pair accordion triggers and collapsible panels with full ARIA state tracking and high-contrast inset focus indicators.
