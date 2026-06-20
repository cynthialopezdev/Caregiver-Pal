# Caregiver Pal — Landing Page

A warm, phone-first marketing landing page for **Caregiver Pal**, a concept product:
a caregiving companion ("Mae") for family members caring for a loved one with cancer.

> ⚠️ **Portfolio / concept project.** Caregiver Pal is not a real, launched product.
> This is a design-and-build exercise. Per the project's own honesty rules, the page
> contains **no fabricated statistics, testimonials, or compliance claims** — every such
> item is intentionally marked `[VERIFY]` / placeholder where real data would go.

<!-- After you deploy, paste your live link here: -->
**🔗 Live demo:** _coming soon_

---

## What this project demonstrates

This isn't just a styled page — it's built from a full product brief, which is the part
worth showing for an internship:

- **Translating strategy into UI.** The build is driven by a brand identity system, a
  problem-aware customer persona ("Denise"), diary-style research, a 13-section landing-page
  PRD, and a data-governance/privacy spec — all included in [`/docs`](docs).
- **Design systems thinking.** A custom "Dawn Arc" color system (twilight → dawn → sage,
  mirroring the emotional arc from dread to relief), a typographic scale, and reusable
  components — all expressed as Tailwind design tokens.
- **Accessibility as a requirement, not an afterthought.** Semantic HTML, keyboard skip
  link, visible focus rings, 44px+ touch targets, and `prefers-reduced-motion` support.
- **Empathetic product copy.** Warm, plainspoken voice that leads with the user's problem
  and never with "AI" — matched to the target audience.
- **Engineering judgment.** Component architecture, light/dark theming, and a calm,
  reduced-motion-safe animation layer.

---

## Tech stack

- **React** + **Vite** (fast dev/build)
- **Tailwind CSS** (utility-first, custom brand tokens)
- **Framer Motion** (scroll reveals, reduced-motion safe)
- **lucide-react** (icons)
- Fonts: **Inter** (UI) + **DM Serif Display** (emotional headlines)

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.jsx                  # page composition
  index.css                # brand tokens, base styles, reduced-motion
  lib/useTheme.js          # light/dark (system default + saved choice)
  components/
    shared/                # Logo, Reveal, SectionHeading, PhoneMockup
    sections/              # Navbar, Hero, ProblemSection, SolutionMeetMae,
                           # HowItWorks, Features, PrivacySafety, TrustCenter,
                           # Stories, Pricing, FAQ, FinalCTA, Footer
docs/                      # the brand, persona, PRD & data-governance briefs
```

## The page, section by section

Navbar · Hero · Problem · Meet Mae (with before/after) · How It Works · Features ·
Privacy & Safety · Trust Center · Stories · Pricing · FAQ · Final CTA · Footer —
fully responsive (mobile-first) with light & dark modes.

---

## A note on honesty

The landing page is deliberately shipped with **no invented proof**. Statistics,
testimonials, pricing, and compliance badges are marked as placeholders and would be
replaced with real, sourced material before any real launch. This reflects a privacy- and
trust-first approach that's especially important for a product handling health information.

---

_Built as a portfolio project. The product concept, research, and brand are fictional._
