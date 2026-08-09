# Palette's Journal — Critical UX/Accessibility Learnings

## 2025-03-01 - FAQ Accordion Accessibility & Focus Outline Interaction
**Learning:** React FAQ Accordion widgets frequently lack standard keyboard accessibility controls (`aria-expanded`, `aria-controls`, `role="region"`) and fail to show visible focus indicators for non-mouse users, making them invisible to screen readers and difficult to navigate. By introducing standard focus states using `focus-visible:ring-2` paired with negative margins/padding (`-mx-3 px-3`), we ensure clear, high-contrast visual cues without causing layout shifts.
**Action:** Always implement WCAG-compliant attributes (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and high-contrast, shift-resistant keyboard focus rings (`focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2`) for all interactive widgets.
