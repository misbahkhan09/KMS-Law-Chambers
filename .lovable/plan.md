# KMS Law Chambers — Premium Website Plan

## Tech stack note
Your brief specifies Next.js, but this Lovable project runs on **TanStack Start + React 19 + Vite + Tailwind v4** (Lovable's modern stack). It delivers the same outcomes you asked for: SSR, dynamic metadata, JSON-LD schema, fast Lighthouse scores, and TypeScript throughout. I'll build on this stack unless you tell me otherwise. Framer Motion → I'll use the actively maintained **Motion for React** (same API).

## Design system
- Tokens in `src/styles.css` (oklch equivalents of your hexes):
  - `--background` #F8F7F4, `--foreground` #111827
  - `--primary` (navy) #0F172A, `--accent` (gold) #C8A977
  - `--secondary` #E5E7EB, plus `--border`, `--muted`, `--card`
- Fonts loaded via `<link>` in `__root.tsx`: Playfair Display (headings) + Inter (body); mapped via `@theme` as `--font-serif` / `--font-sans`.
- Motion: fade-up on scroll, staggered reveals, counter animations, hover micro-interactions. No gradients. No flashy effects.
- Generous whitespace, editorial type scale, hairline gold dividers, square-ish corners (radius ~6px).

## Route architecture (separate routes for SEO, each with its own `head()`)
```
src/routes/
  __root.tsx              Shared shell: header, footer, fonts, base meta, Organization + LegalService JSON-LD
  index.tsx               Home (hero, trust strip, practice preview, why KMS, stats, team preview, presence, contact CTA)
  practice-areas.tsx      All 7 practice areas (cards + detail accordions)
  expertise.tsx           Experience highlights (6 premium feature cards)
  about.tsx               Why KMS (split layout) + firm story
  team.tsx                Team grid with Read More modal
  matters.tsx             Representative matters (anonymized case studies)
  presence.tsx            Geographic presence with interactive India SVG map
  contact.tsx             Consultation form + WhatsApp / Call / Email
```
Home page composes condensed versions of each section so it works as a single-scroll experience too; deep routes give SEO + shareable URLs.

## Components
- `components/site/Header.tsx` — minimal nav, gold underline on active link
- `components/site/Footer.tsx` — dark navy, 4 columns
- `components/site/Hero.tsx` — full-viewport, headline, subhead, two CTAs, professional image slot
- `components/site/TrustBar.tsx` — Supreme Court, High Courts, District Courts, Tribunals, Arbitration, Consumer Forums
- `components/site/PracticeCard.tsx` — 7 areas with subtle hover lift
- `components/site/WhyKMS.tsx` — split image/content
- `components/site/ExpertiseCards.tsx` — 6 highlight cards
- `components/site/TeamCard.tsx` + `TeamMemberModal.tsx` — image, name, designation, bio/education/experience, image upload UI (stored locally in state for now; persistence noted below)
- `components/site/IndiaMap.tsx` — inline SVG map, 6 states highlighted in gold with hover tooltips
- `components/site/MattersGrid.tsx` — case-study cards (anonymized)
- `components/site/ContactForm.tsx` — zod-validated form + WhatsApp/Call/Email action buttons
- `components/site/Counter.tsx` — animated stat counter (IntersectionObserver)
- `components/site/Reveal.tsx` — fade-up + stagger wrapper using Motion

## Content
All copy will be drafted in the firm's voice (authoritative, restrained). Practice areas and experience highlights use your exact list. Representative matters will be plausible anonymized vignettes you can edit.

## Images
- Hero, Why KMS, and team placeholder portraits generated with the image tool (premium-feeling, neutral, no stock-photo cliché). All under `src/assets/` with proper `alt` text and lazy loading.
- Team cards include an "Upload photo" affordance.

## SEO
- Per-route `head()`: title, description, og:title/description/url, canonical (relative paths), Article/Service JSON-LD where relevant
- Sitewide Organization + LegalService JSON-LD in `__root.tsx`
- Semantic HTML, single `<h1>` per route, descriptive alt text, `<main>` landmark in root layout
- `public/robots.txt` and `public/sitemap.xml` with all routes

## Accessibility
- WCAG AA contrast (navy/gold on cream verified)
- Focus-visible rings, 44px tap targets, `aria-label` on icon buttons
- Modal uses shadcn Dialog (Radix) for correct focus trap + ESC
- Reduced-motion respected (Motion's `useReducedMotion`)

## Things to confirm (open questions)
1. **Team data** — do you have real names/bios/photos, or should I seed plausible placeholder profiles you'll edit later?
2. **Backend** — contact form: just `mailto:` + WhatsApp deep link for now, or enable Lovable Cloud so submissions are stored and emailed?
3. **Image upload persistence** — local-only (preview in session) vs Lovable Cloud storage (persists across reloads). Cloud needed for real persistence.
4. **WhatsApp / phone / email** — what number and email address should the CTAs use?

I can proceed with placeholder team data, `mailto:`/WhatsApp deep links, and local-only image upload if you'd rather not enable Cloud yet — just say the word and I'll start building.