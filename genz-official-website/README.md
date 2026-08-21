# GenZ DevLabs — marketing site

Next.js 14 (App Router) + TypeScript + Tailwind CSS implementation of the
[GenZ Website Figma home page](https://www.figma.com/design/1WCYBq7CgJ1IiuYT341WBj/Genz-Website?node-id=360-889).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Layout of the code

```
app/
  layout.tsx        root shell, metadata, Google Fonts (Poppins + Inter)
  page.tsx          composes the eight sections
  globals.css       Tailwind layers + .shell page gutter
components/
  sections/         Navbar, Hero, Services, Projects, WhyChooseUs,
                    TechStack, Contact, Footer  — one per Figma frame
  ui/               GradientButton / OutlineButton, SectionHeading, LearnMore
  icons/            Logo, ServiceIcons, MiscIcons, Decor — all inline SVG
lib/content.ts      every string, project, service and tech-logo entry
public/assets/      the six raster images (see that folder's README)
tailwind.config.ts  design tokens transcribed from Figma
```

**All copy lives in `lib/content.ts`** — change it there, not in the components.

## Design tokens

| Token | Value | Where it comes from |
|---|---|---|
| `brand-cyan` | `#05BEDD` | accent word in every heading |
| `brand-blue` | `#3294F4` | gradient terminus |
| `brand-sky` | `#34AAFF` | "See Our Works" border |
| `brand-teal` | `#6ECDDD` | nav underline |
| `ink` | `#2D2D2D` | hero headline |
| `muted` | `#808080` | body copy |
| `bg-brand-gradient` | `linear-gradient(259.23deg, #3294F4 15.65%, #05BEDD 90.47%)` | every filled CTA |

Figma exposed no published variables for this file, so these are transcribed
from the raw fills and live only in `tailwind.config.ts`.

## Fidelity notes

- The desktop layouts for **Our Services** and **Our Projects** reproduce the
  Figma's staggered / collage geometry at exact pixel offsets above `lg`.
  Below `lg` they fall back to a plain responsive grid, which the Figma doesn't
  specify.
- Every icon, decorative shape and the GZ monogram is **hand-authored inline
  SVG** in `components/icons/`. Tech-cloud logos come from the `simple-icons`
  package.
- Six raster images are placeholders — see `public/assets/README.md` for the
  Figma node to export for each.

## Still to wire up

- `components/sections/Contact.tsx` currently fakes submission. Point the
  `onSubmit` handler at your form endpoint (Formspree, Resend, a route handler…).
- Nav, footer and "Learn more" links are in-page anchors. Give projects and
  services real routes when those pages exist.
- Social URLs in `lib/content.ts` are placeholders.
