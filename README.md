# SKINcerely Yours Skin & Hair Clinic

A patient-facing website for a **Consultant Dermatologist, Dermatosurgeon, Cosmetologist & Hair Transplant Surgeon** — built with **Next.js (App Router) + Tailwind CSS v4 + TypeScript**, with **Supabase** powering the appointment-booking form.

The visual system is the **botanical-spa** design adapted into a full doctor's site: sage greens, eucalyptus, oat, cream and terracotta, with Fraunces serif headings, Nunito body text, floating botanical illustrations and pebble-shaped cards.

---

## Features

- **Sticky header** with a CSS-only mobile navigation (no JS needed) and a "Book a Consultation" CTA
- **Hero** — doctor's four credentials as the eyebrow, primary/WhatsApp/ghost CTAs, trust-strip stats, animated botanical figure with floating info badges
- **Credential strip** — degrees, dermatosurgery certification, FUE hair transplant, IADVL · ISHRS membership, no-upsell promise
- **About / qualifications** — portrait illustration plus a 6-card credential grid (degrees, KMC registration, dermatosurgery, hair transplant, cosmetology, memberships)
- **7 service cards** — acne & acne-scar, pigmentation & melasma, anti-ageing/botox/fillers, laser hair reduction, hair fall & PRP, hair transplant consultation, dermatosurgery & minor OT
- **Why SKINcerely Yours** — differentiator checklist plus a 4-stat cluster (12,000+ patients · 4.9★ · 14 yrs · 30 min consult)
- **Results** — honest before/after timeline cards (illustrated placeholders, ready for real consented photos)
- **Reviews** — testimonial cards plus a "Rated 4.9 by 1,840 patients" banner
- **FAQ** — native `<details>` accordion, 8 answers including dermatosurgery-in-clinic
- **Contact & booking** — appointment request form that **inserts into Supabase**, clinic details list (call / WhatsApp / email / address / hours) and a map card
- **Floating WhatsApp button** — `wa.me` deep link with a prefilled message
- **Footer** — treatments index, clinic links, contact block

### Accessibility & quality

- Skip-link, semantic landmarks, `aria` labels on decorative-vs-content SVGs
- All "imagery" is hand-drawn CSS/SVG — no binary assets, instant loads
- Fully responsive; the design tokens live in `@theme` in `globals.css`
- Server Action form with honeypot spam trap, typed state via `useActionState`
- **Graceful degradation**: without Supabase env vars the form falls back to demo mode instead of failing

---

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Supabase keys (optional for a demo run)
npm run dev                  # http://localhost:3000
```

### Wiring up Supabase (bookings storage)

1. Create a project at [supabase.com](https://supabase.com).
2. Run `supabase/migrations/0001_create_appointments.sql` in the **SQL editor** (or `supabase db push` with the CLI). It creates `public.appointments` with RLS: anonymous inserts allowed, reads restricted to authenticated staff.
3. Copy `.env.example` → `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Restart `npm run dev` — form submissions now persist to `public.appointments`.

Without the env vars the site still works end-to-end; the form returns a demo-mode message and WhatsApp/phone/email links remain functional.

---

## File structure

```
src/
  app/
    actions.ts               # "use server" booking action → supabase insert + honeypot
    globals.css              # Tailwind v4 @theme tokens + the whole botanical-spa stylesheet
    layout.tsx               # Fraunces + Nunito fonts, metadata
    page.tsx                 # section composition
  components/
    Header.tsx               # sticky header, CSS-only mobile nav, Book CTA
    Hero.tsx                 # eyebrow credentials, CTAs, trust strip, botanical art + badges
    CredentialStrip.tsx      # sage divider strip of credentials
    About.tsx                # doctor portrait + 6-card qualifications grid
    Services.tsx             # 7 pebble service cards
    Why.tsx                  # differentiators + stat cluster
    Results.tsx              # before/after illustrated cards
    Testimonials.tsx         # review cards + 4.9 rating banner
    Faq.tsx                  # <details> accordion + aside CTA
    Contact.tsx              # booking form + clinic details + map card
    BookingForm.tsx          # client form → server action (useActionState)
    FloatingWhatsApp.tsx     # wa.me floating bubble
    Footer.tsx               # sitemap footer
    Icons.tsx                # inline SVG icon set
  lib/
    clinic.ts                # SINGLE SOURCE: name, doctor, phone, WhatsApp, hours…
    supabase.ts              # cached client, returns null when env vars absent
supabase/
  migrations/0001_create_appointments.sql
.env.example
```

## Making it real (placeholders to replace)

All site-wide details live in **`src/lib/clinic.ts`** — change them once:

| Field | Current value |
| --- | --- |
| Doctor | Dr. Shahnoor Ali Khan |
| Registration | Telangana Medical Council Registered Practitioner |
| Phone / WhatsApp | +91 94931 23000 · +91 81217 81781 |
| Email | *(empty — hidden until a real one is added)* |
| Address / hours | New Malakpet, Malakpet, Hyderabad · Mon–Fri 5–8pm, Sat 11–1, Sun closed |

Still to verify with the clinic: the stats (12,000+ patients · 4.9★ · 14 yrs), the testimonials (currently sample copy), the illustrated before/after results cards, and the social links in the footer.

## Future implementation plans + expansions

- **Slot booking** — pick-a-time calendar backed by a `slots` table or an embed (Calendly/Practo)
- **Staff dashboard** — authenticated view over `appointments` (status flow is already in the schema: `new → contacted → confirmed / cancelled`)
- **Real photo gallery** — consented before/after photography with drag-to-compare
- **WhatsApp / email notifications** on new bookings via Supabase edge functions or Resend
- **Treatment detail pages** — `/treatments/[slug]` per service card, SEO-focused
- **Blog / patient education** — MDX posts on skin and hair topics
- **Multi-doctor support** — practitioner profiles if the clinic grows
- **Google Maps embed + directions** in place of the illustrated map card

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 (`@theme` CSS-first config) · `@supabase/supabase-js` · Fraunces & Nunito via `next/font`
