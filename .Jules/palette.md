# Palette's Journal

## 2025-05-18 - Card-Styled Accordion Keyboard Focus and ARIA Structure
**Learning:** When accordion triggers are nested inside rounded card containers with padding, placing focus rings directly on the `<button>` element creates an awkward inner outline that doesn't follow the card's boundary or border radius. Using `focus-within:ring-2 focus-within:ring-navy` on the outer card container with `focus:outline-none` on the button trigger cleanly encloses the full card component without clipping, alongside standard W3C ARIA accordion attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`).
**Action:** In card-styled accordion lists, delegate keyboard focus styling to the card wrapper via `focus-within:ring-2` to maintain harmonious visual hierarchy while ensuring full keyboard accessibility.
