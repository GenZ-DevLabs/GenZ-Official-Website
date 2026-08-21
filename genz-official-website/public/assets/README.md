# Image assets

Every icon and decorative shape on the site is **hand-authored inline SVG** in
`components/icons/`. The files here are the real raster exports from the
[Genz Website Figma file](https://www.figma.com/design/1WCYBq7CgJ1IiuYT341WBj/Genz-Website?node-id=360-889).

| File | Used by | Figma node | Notes |
|---|---|---|---|
| `logo-genz.png` | `components/icons/Logo.tsx` (nav + footer) | `360:1077` | 711 × 512, transparent |
| `hero-shape.png` | `components/sections/Hero.tsx` | `360:904` | downscaled from 3242 × 3640 to 1603 × 1800 |
| `project-cakesale.png` | "Cakesale website" card | `280:475` | 388 × 388 |
| `project-showcase.png` | centre collage image | `280:462` | same artwork as `project-cakesale` |
| `project-carsale.png` | "Car sale application" (top-right) | `280:482` | 388 × 388 |
| `project-carsale-2.png` | "Car sale application" (mid-left) | `280:465` | 388 × 388 |
| `project-wasana.png` | "Wasana Cake website" card | `280:474` | 388 × 388 |
| `contact-illustration.png` | `components/sections/Contact.tsx` | `524:1112` | 568 × 556 |

## Replacing a project thumbnail

The four project exports are **388 × 388 with the rounded corners and drop
shadow already baked into a transparent bleed**. `Thumb` in
`components/sections/Projects.tsx` therefore renders them bare — no `rounded-*`,
no `shadow-*`, no background — and positions the 388px box 36px outside the
card so the artwork lands on the Figma's 316px footprint.

If you swap in a flat 316 × 316 image with no bleed, add `rounded-card
shadow-thumb` back to `Thumb` and change the offsets from `-36px` to `0`.
