# Palette's Journal

## 2025-02-23 - Accordion Accessibility & Focus Inset Styling
**Learning:** Accordion toggles require `aria-expanded`, `aria-controls`, `role="region"`, and `aria-labelledby` attributes for screen readers to properly convey disclosure relationships. For keyboard navigation, applying `focus-visible:ring-inset` prevents outline clipping and layout shifts when buttons are positioned within padded containers.
**Action:** Always pair `aria-expanded` and `aria-controls` on disclosure buttons with `role="region"` and `aria-labelledby` on collapsible content panels, and use `focus-visible:ring-inset` for bounded containers.
