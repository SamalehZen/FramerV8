# Palette's UX & Accessibility Journal

This journal documents critical UX and accessibility learnings on Propertiva.

## 2025-02-13 - [Initial Setup]
**Learning:** Foundational project structure analysis. No critical learnings to log yet.
**Action:** Ready to investigate accessibility/UX improvements.

## 2025-07-22 - [Layout Shift Prevention with Focus Rings]
**Learning:** Adding high-contrast focus rings (`focus-visible:ring-2`) to inline/header interactive elements like Accordion triggers can cause minor visual layout shifts or cut off outlines. Compensating for the added outline space using matching positive horizontal padding and negative horizontal margins (e.g. `px-2 -mx-2`) avoids layout shifts, preserves alignment, and ensures focus outlines render perfectly without clipping.
**Action:** Always pair visible focus rings on header/text blocks with padding/negative-margin offset classes to keep layout perfectly aligned during keyboard navigation.
