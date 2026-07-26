# Palette's Journal

## 2025-05-15 - FAQ Accordion Accessibility & Keyboard Navigation
**Learning:** Standard custom accordion implementations often lack semantic ARIA mappings, meaning screen reader users cannot perceive state changes. Additionally, missing high-contrast visible focus styles severely hinders keyboard-only navigation.
**Action:** Enhance the interactive buttons in FAQ components with WAI-ARIA standard properties (`aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby`) and apply a non-disruptive `focus-visible` ring style using negative offset and margin tricks to prevent visual layout shifts when focused.
