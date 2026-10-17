# Akamwesi Solar Energy (Lumina) — Demo Website

A polished, conversion-focused multi-page demo website for Akamwesi Solar Energy (Lumina), a solar equipment supplier located on Gayaza Road, next to Akamwesi Mall, Kampala, Uganda.

## Overview
- Built with Next.js 16.4.2 (App Router), React 19, TypeScript, Tailwind CSS v4 (via Turbopack), lucide-react.
- Design system: deep navy + solar orange + restrained green. Cinematic hero, category grid, product catalogue, WhatsApp enquiry flows.
- Emphasis on honesty: all entries are clearly marked demo/sample; unverified business facts are not invented.

## Key Features
- TikTok video hero: uses `NEXT_PUBLIC_HERO_VIDEO_URL` (authorised MP4) with cinematic poster fallback; links to supplied TikTok video page.
- Full product catalogue with search/filter/sort and product detail pages; client-side cart demo (localStorage only).
- WhatsApp-first contact: pre-filled messages for product enquiry, category enquiry and request a quote; floating WhatsApp button.
- SEO: comprehensive metadata, sitemap.xml, robots.txt, Open Graph image.
- Accessibility: semantic HTML, aria attributes, reduced-motion support.
- Full responsive design (mobile-first).

## Information Disclosure & Client Confirmations Needed
The following were **not confirmed** by the client and are **not published as verified**:
- Business hours (explicitly not shown)
- Email address (omitted)
- GPS coordinates (omitted)
- Founding year, registration, certifications, warranties, stock/delivery/install promises
- Social platforms other than TikTok (`@akamwesisolarenergies`) — Instagram/Facebook not included

Verified facts used:
- WhatsApp: `+256 700 267711` (`256700267711`), `https://wa.me/256700267711`
- TikTok handle: `@akamwesisolarenergies`, TikTok page & video URLs as supplied
- Location: Gayaza Road, Kyebando, next to Akamwesi Mall, Kampala, Uganda

All prices shown are **indicative sample figures** for demonstration only and are clearly labelled.

## Running Locally
```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build & Quality
```bash
npm run build   # production build
npm run start   # serve built app
npm run lint    # ESLint (flat config)
npm run typecheck # TypeScript noEmit
```

## Assets
The original `assests/` folder was moved unchanged (no renaming) to `public/assets/` — filenames with spaces and parentheses are preserved and safely encoded via `asset()` helper.

## Environment
- `NEXT_PUBLIC_SITE_URL` — optional base URL for canonical/OG/sitemap (defaults to demo URL).
- `NEXT_PUBLIC_HERO_VIDEO_URL` — optional authorised MP4 for hero background video.

## Disclaimer
This is a **design demonstration**. Nothing constitutes a quotation, offer, confirmation of stock/availability/warranty or a commitment. All specifications and final terms must be confirmed directly with Akamwesi Solar Energy (Lumina).
