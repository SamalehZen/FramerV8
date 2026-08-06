# Palette 🎨 - UX Journal

## 2025-03-01 - FAQ Keyboard Accessibility and Focus Rings
**Learning:** Interactive elements like custom accordions or navigation items need proper focus rings (`focus-visible:ring-2`, `focus-visible:ring-offset-2`) and keyboard focus feedback to be accessible. They also require proper ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`, etc.) for screen readers to interpret them correctly.
**Action:** Always add semantic ARIA and high-contrast visible focus styles to accordions/tabs/carousels to avoid screen reader blind spots and aid keyboard navigation.
