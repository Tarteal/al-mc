
# Al Mustafa Caravan — Travel Agency Site

Current `src/routes/` only contains the template `index.tsx`. I'll build the full site from scratch and include the package details in the same pass.

## Pages & routes

```
/              Home (hero + 3 service sections)
/hajj          Hajj package tiers
/umrah         Umrah package tiers
/ziyarah       Ziyarah package tiers
/testimonials  Testimonials carousel
/contact       Contact form + agency info + map placeholder
```

Each route gets its own `head()` with unique title/description/OG tags.

## Design

- Orange + white palette via semantic tokens in `src/styles.css` (oklch). Primary `#E87722`-ish orange, soft cream surfaces, deep charcoal text.
- Typography: Playfair Display (headings) + Inter (body), loaded via `<link>` in `__root.tsx`.
- Sticky translucent nav with blur, smooth scroll, subtle fade/slide-in on section entry, hover lift on cards.
- Floating WhatsApp FAB (bottom-right) on every page.
- Footer with "Al Mustafa Caravan © 2026".

## Bilingual EN/AR

- Lightweight i18n via React context + a `translations.ts` dictionary (no extra deps).
- `dir="rtl"` and `lang="ar"` toggled on `<html>` when Arabic is active; layout uses logical CSS properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) so RTL flips cleanly.
- Language preference persisted in `localStorage`.
- EN/عربي toggle in the nav.

## Package data (placeholder, USD, editable)

Drafted in `src/lib/packages.ts`. Three tiers each:

**Hajj** (Economy $6,500 · Premium $9,800 · VIP $14,500) — 21–28 days, flights, 5★ hotels near Haram/Madinah by tier, full Mina/Arafat services, Ziyarat tours, guide, visa.

**Umrah** (Standard $1,650 · Deluxe $2,400 · Luxury $3,500) — 10–14 days, flights, hotel tier, transport, Ziyarat in Makkah/Madinah, visa.

**Ziyarah** — Iraq Ziyarah (Najaf/Karbala/Kadhimiya/Samarra), 7–10 days (Standard $1,450 · Premium $2,100 · VIP $2,950); optional Iran extension tier ($+850).

Each package card shows: title, duration, hotel tier, key inclusions list (✓), price "from $X", and a **Book on WhatsApp** button that opens `https://wa.me/<number>?text=…` pre-filled with package + tier in the active language.

## Components

```
src/components/
  Layout.tsx              nav + footer + WhatsApp FAB wrapper
  Nav.tsx                 sticky nav + language toggle
  Footer.tsx
  WhatsAppFab.tsx
  HeroSection.tsx         reusable full-screen background hero
  PackageCard.tsx         tier card with WhatsApp CTA
  TestimonialsCarousel.tsx
  LanguageToggle.tsx
src/lib/
  i18n.tsx                provider + useT() hook
  translations.ts         EN/AR strings
  packages.ts             package data (EN/AR labels, price, inclusions)
  whatsapp.ts             builds wa.me deep link
src/routes/
  __root.tsx, index.tsx, hajj.tsx, umrah.tsx, ziyarah.tsx,
  testimonials.tsx, contact.tsx
```

## Images

Use the user-provided hero image (already attached) for the home hero; use high-quality Unsplash photos (Kaaba, Masjid al-Haram, Karbala shrine) referenced by URL for the service section backgrounds and package page heroes. No image generation needed.

## Contact form

Submits to a `createServerFn` that inserts into a `contact_submissions` table in Lovable Cloud (admin-read only, RLS denies client reads). Validates with Zod. Service select includes Hajj/Umrah/Ziyarah. Google Map placeholder is an embedded iframe pointing to the agency address (user can update lat/long later).

## WhatsApp config

`VITE_WHATSAPP_NUMBER` constant in `src/lib/whatsapp.ts` (placeholder `+1234567890` — user replaces). All "Book Now" CTAs route through it.

## SEO

Per-route `head()` with title/description/og:title/og:description; og:image at each leaf using that page's hero image; semantic `<h1>` per page; alt text on all images.

## Tech notes

- TanStack Start file-based routing, flat dot-naming.
- Tailwind v4 tokens in `src/styles.css` (`@theme inline`), no JS config.
- All colors via semantic tokens — no hardcoded `bg-orange-500` in components.
- Lovable Cloud enabled for the contact form (migration creates `contact_submissions` with grants + RLS).
