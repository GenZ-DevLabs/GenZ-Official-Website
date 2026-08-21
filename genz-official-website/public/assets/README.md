# Image assets

Every icon, decorative shape and the GZ logo on this site is **hand-authored inline
SVG** in `components/icons/` — nothing to download for those.

The six files below are the only true raster assets. They currently hold generated
placeholders. To use the real artwork, export each node from Figma
([Genz-Website](https://www.figma.com/design/1WCYBq7CgJ1IiuYT341WBj/Genz-Website?node-id=360-889))
at **2×** and overwrite the file, keeping the same name.

| File | Figma node | Layer name | Displayed size |
|---|---|---|---|
| `project-cakesale.png` | `280:475` | `Dev Log 2` | 316 × 316 |
| `project-carsale.png` | `280:482` | `Untitled design 2` | 316 × 316 |
| `project-wasana.png` | `280:474` | `Untitled design (1) 2` | 316 × 316 |
| `project-carsale-2.png` | `280:465` | `Rectangle 68` | 316 × 316 |
| `project-showcase.png` | `280:462` | `slider` | 420 × 412 |
| `contact-illustration.png` | `524:1112` | `12982910_5124556 1` | 568 × 556 |

Optional: if you'd rather use the official raster logo than the vector re-draw,
export node `360:1077` (`Logo Genz 2`) as `logo-genz.png` and swap `LogoMark` in
`components/icons/Logo.tsx` for a `next/image`.

Filenames are referenced from `lib/content.ts` and `components/sections/*`.
