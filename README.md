# Propertiva — Real Estate Landing Page

A high-fidelity, pixel-faithful clone of the **Propertiva** real estate Framer template
(`propertiva.framer.website`), rebuilt as a clean, production-ready React application.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (custom design tokens extracted from the original)
- **Framer Motion** (scroll reveals, carousel, accordions)
- Self-hosted **Open Sauce One / Open Sauce Two** fonts (the exact families used by the original)

## Getting started

```bash
pnpm install
pnpm dev      # start the dev server (http://localhost:5173)
pnpm build    # type-check + production build
pnpm preview  # preview the production build
```

## Structure

```
public/assets/        Original images, SVG icons/logos, fonts and video
src/
  components/
    layout/           Navbar
    sections/         Hero, TrustBar, About, Stats, Properties, Services,
                      Amenities, HowItWorks, VideoSection, Gallery,
                      Testimonials, Blog, FAQ, CTA, Footer
    ui/               Button, Eyebrow, SectionHeader, Reveal, icons
  data/content.ts     Single source of truth for all copy & section data
  lib/                Animation helpers (reveal hook, variants) and utils
```

## Design system

| Token        | Value      | Usage                          |
| ------------ | ---------- | ------------------------------ |
| `navy`       | `#1E365D`  | Primary — buttons, logo, accents |
| `surface`    | `#F0F0F0`  | Page background                |
| `ink`        | `#0A0A0A`  | Headings                       |
| `body`       | `#757575`  | Body / muted text              |
| Display font | Open Sauce One  | Headings (500 / 600)      |
| Body font    | Open Sauce Two  | UI & body (500 / 700)     |

Entrance animations respect `prefers-reduced-motion` and reveal reliably via an
IntersectionObserver hook with a scroll fallback and safety timeout, so content is
never left hidden.
