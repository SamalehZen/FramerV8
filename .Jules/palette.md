## 2025-02-18 - Accordion ARIA & Focus Ring Pattern
**Learning:** Interactive accordion headers require `aria-expanded` and `aria-controls` to communicate state to screen readers. For padded card containers, placing `focus-visible:ring-inset` directly on the `<button>` rather than the outer `<div>` prevents layout shifts and clipping while providing distinct focus feedback.
**Action:** Always structure accordion triggers with explicit `id`, `aria-controls`, `aria-expanded`, and `focus-visible:ring-inset` styling on the clickable element itself.
