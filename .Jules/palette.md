# Palette's Journal

## 2025-05-15 - Rounded Flex-List Focus Indicators Without Layout Shift
**Learning:** Adding focus outline/ring indicators (`focus-visible:ring-2`) to rounded items in tightly bounded flex containers or list layouts can cause slight visual expansion, border clipping, or layout jitter/shifting. By introducing negative margins combined with matching padding (e.g. `-mx-3 px-3`) and a ring offset (`focus-visible:ring-offset-2`), we provide breathing room for focus rings so they render clearly without shifting neighboring siblings or changing row heights.
**Action:** Always combine negative horizontal/vertical margins with matching padding on button/anchor components when adding keyboard focus outlines to rounded container triggers inside lists and grids.
