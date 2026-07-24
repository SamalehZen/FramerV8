# Palette's Journal

## 2025-02-15 - FAQ Accordion Accessibility & UX Polish
**Learning:** For interactive UI elements such as FAQ accordions, both semantic HTML/ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`, etc.) and visible keyboard focus styles (such as `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2`) are crucial for fully accessible design.
**Action:** Always implement a complete set of ARIA attributes on accordion triggers and panels, ensure they are keyboard navigable with clear focus-visible outlines, and keep container dimensions stable on hover/focus states to avoid layout shifts.
