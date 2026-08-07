# Palette's Journal — Critical UX & Accessibility Learnings

## 2025-08-07 - Accessible Accordions and Preventing Focus Layout Shifts
**Learning:** When adding keyboard focus indicators to container-like list components (such as an FAQ accordion), drawing focus outlines inside elements with custom horizontal padding can cause visual layout shift. Applying standard ARIA roles and keyboard focus styles requires negative margins and horizontal padding adjustments (`px-3 -mx-3`) on the interactive button itself to maintain alignment with the design system.
**Action:** Always pair visual keyboard focus indicator rings (`focus-visible:ring-2`) on interactive containers with offset horizontal padding (`px-3 -mx-3 rounded-xl`) to preserve clean grid lines, and ensure accordion buttons always map to panels with correct ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`).
