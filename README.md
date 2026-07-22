# Triangle Import Repair — Website Redesign

A brand-new website for Triangle Import Repair, built with React + Vite +
Tailwind CSS, pulling real colors, photos, and copy from the business's
Google Business Profile and Facebook page.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Why this business

Triangle Import Repair (1700 Seabeck Hwy NW, Bremerton, WA) was found
following the standing rule for new redesigns in this series: find a
business with a listed email and no website; if that's impossible, find
one with a listed email and a genuinely outdated/broken site.

This business has **no website at all** — confirmed on both its Google
Business Profile (an "Add website" prompt appears where a link would be)
and a live Google search, which surfaces only third-party directory
listings (Carfax, an auto-generated `edan.io` page) rather than anything
the business itself built or controls. It's a strong, well-established
shop that simply never had a site: 4.7 stars across 107 Google reviews,
15+ years of Google review history, a real physical sign, and a real
family story (owned and run by Ken & Ann Wilson since 1990) — the exact
kind of business this redesign series exists to help.

An email address was confirmed via the business's own Facebook page
(facebook.com/Triangleimportrepair → About → Contact Info):
**triangleimport@gmail.com**.

## Sourcing — what's real vs. what was designed

Every fact, photo, and color in this project is sourced from a real,
verifiable place:

- **Business facts** (name, address, phone, hours, rating, review count)
  — Google Maps business listing, confirmed 2026-07-22.
- **Email** — Facebook page Contact Info, confirmed 2026-07-22.
- **Tagline** ("Expert Auto Repair By Honest People, Since 1990") and
  owner names (Ken & Ann Wilson) — verbatim from the Facebook page's own
  intro/bio line.
- **Services** — the shop's own signage ("German · Swedish" on the
  Facebook profile logo; a second real sign photo shows "Japanese ·
  German · Swedish"), plus the Google Business Profile's listed
  "Offerings" (oil change) and service categories named in real reviews.
- **Review content** — Triangle Import Repair's Google Maps listing
  surfaces real, Google-verified topic tags with mention-counts (e.g.
  "helpful team" ×5, "trustworthy staff" ×4) rather than exposing
  individual review text for copying. Rather than inventing quotes
  attributed to customers who never said them, the Reviews section uses
  those real tag counts directly, plus the shop's real Facebook stat
  (100% recommend across 12 reviews).
- **Photos** — three real photos, downloaded with the user's explicit
  per-photo permission:
  - `public/images/shop-sign.jpg` — the shop's real hand-built triangle
    sign, from a Google Maps business photo (contributor Greg Salo,
    Sep 2019).
  - `public/images/storefront-entrance.jpg` — the real front entrance at
    1700 Seabeck Hwy NW, also from Google Maps business photos.
  - `public/images/logo-circle.png` — the shop's real circular logo,
    from its Facebook page.
- **Colors** — every value in `tailwind.config.js`'s `brick` and `stone`
  palettes was sampled with a pixel color-picker directly from
  `shop-sign.jpg` (the maroon sign border/lettering, and the cinderblock
  wall it's mounted on) — not an invented "automotive" brand palette.

No AI-generated imagery is used anywhere in this project.

## Design system — "The Triangle Badge"

This business's own real sign IS its brand identity: a maroon-and-cream
triangle badge, hand-built and mounted on the shop wall since long before
this redesign. Rather than design around a generic "auto repair" look,
this system takes that literal triangle badge as its throughline:

- **Clipped triangle-corner badges** (`.badge-triangle` /
  `.badge-triangle-dark` in `index.css`) echo the sign's own cut-corner
  triangle silhouette, used for the "Est. 1990" mark and stat chips
  instead of generic rounded pills.
- **A bolted "sign plate" card treatment** (`.sign-plate`) frames the
  real sign and storefront photos like a mounted metal shop sign, with a
  thick maroon border and two bolt-head details.
- **Fraunces**, a bold slab-serif, stands in for the sign's own
  hand-lettered display type; Inter is the clean body face; JetBrains
  Mono renders small stamped details.
- A faint repeating triangle-outline texture (`bg-triangles` in the
  Tailwind config) appears behind the hero section.

This is the eighth redesign in this portfolio. Prior entries have each
built a distinct visual system tied to that specific business's own real
assets (a technician ID-card look for Orca Auto Repair's certification
photos, a work-order/ticket look for Bremerton Auto Repair's real
paperwork). This one continues that pattern: the "badge" concept comes
directly from the fact that Triangle Import Repair's real, physical sign
already *is* a badge.

## Verification note

This project's dependencies were **not installed and the dev server was
not run** in the sandbox that produced this code — outbound network
access to the npm registry (`registry.npmjs.org`) returned 403 Forbidden
for this session, consistent with every prior redesign in this
portfolio. Every `.jsx`/`.js` file was instead syntax- and import-checked
with the TypeScript compiler
(`tsc --jsx react-jsx --noEmit --allowJs --skipLibCheck`) as a stand-in
— clean, zero errors — and every icon name imported from `react-icons/lu`
in `src/components/icons.jsx` was cross-checked against that package's
actual `index.d.ts` (found in a global npm cache in this environment) to
confirm each export really exists. Every Tailwind color/utility class
used across the project was also cross-checked against the tokens
defined in `tailwind.config.js`.

## File structure

```
src/
  main.jsx           Entry point
  App.jsx             Page composition
  index.css           Tailwind layers + shared component classes
  components/
    Header.jsx         Sticky nav with status strip
    Hero.jsx            Hero section with real sign photo
    Services.jsx        Import specialties + general repair
    WhyChooseUs.jsx      Trust points, drawn from real review language
    About.jsx            Ken & Ann Wilson's story
    Reviews.jsx           Real Google review topic tags + FB stat
    Gallery.jsx           The two real shop photos
    CTA.jsx               Conversion band
    Contact.jsx            Address/phone/email/hours/form/map
    Footer.jsx
    SectionHeading.jsx    Shared eyebrow/title/description block
    icons.jsx              react-icons/lu registry
  data/
    business.js         Core business facts
    services.js          Service list + mission line
    testimonials.js       Real review tag counts + FB stat
public/
  images/                shop-sign.jpg, storefront-entrance.jpg, logo-circle.png
```
