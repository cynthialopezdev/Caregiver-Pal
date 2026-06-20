# Caregiver Pal — Product Requirements Document
## Marketing Landing Page

---

## Executive Overview

**Product:** Caregiver Pal — a hyper-personalized AI caregiving companion for family cancer caregivers. Each customer is given a named, anthropomorphized companion (e.g., *Mae*) that lives in the chat apps they already use (Telegram, WhatsApp, SMS, email) and quietly tracks the tedious, recurring work of caregiving: medications (including changes and reactions), blood/platelet counts, daily care and hygiene routines, and appointments synced to Google Calendar.

**Purpose:** Convert overwhelmed, *problem-aware* family caregivers into free-trial users and subscribers through emotional resonance, trust, and a clear "this lifts the weight off you" value proposition — without intimidating them with technology or the word "AI."

**Primary Audience:** Middle-income, employed adults (the "sandwich generation") who have suddenly become the default caregiver for a parent or partner with cancer. Represented by our research persona, **Denise** — see *Part 1: Problem Aware Avatar* and *Part 2: Diary Entries* in the master research document.

**Conversion Goals (in priority order):**
1. Start free trial (no credit card).
2. Connect a channel (Telegram/WhatsApp/SMS/email) and send the first message to their companion.
3. Email capture (for those not ready: caregiver guide / "how it works" follow-up).

> **This is a B2C, high-empathy page — not a B2B SaaS page.** Every requirement below is governed by the Caregiver Pal Brand Voice (warm, steady, plainspoken, never salesy, never "AI"-led). Where the source template optimized for *professional decision-makers*, this PRD optimizes for an *exhausted human being who is scared of dropping the ball*.

---

## Guiding Principles (Rooted in the Research)

1. **Meet the pain, not the technology.** Visitors arrive problem-aware ("how do I keep track of mom's chemo meds") and solution-*un*aware. We lead with their problem and relief — never with "AI agents."
2. **Reduce overwhelm everywhere.** The audience is fatigued and time-poor. Generous whitespace, one idea per screen, short copy, large targets, no clutter. The page itself should feel calm.
3. **Phone-first is literal.** The product *is* a phone/chat experience. The landing page is most often viewed on a phone, late at night.
4. **Trust is the conversion lever.** Health data + an anxious audience = privacy, safety, and "you're not alone" reassurance carry more weight than feature lists.
5. **Anthropomorphize.** Show a *companion* (Mae) the visitor can imagine talking to — not a dashboard.
6. **Dignity over urgency.** No false scarcity, no countdown timers, no guilt. The only urgency we honor is the real one the caregiver already feels.

---

## Adaptation Summary (What Changed From the Source B2B Template & Why)

| Source Template (B2B Sales SaaS) | Caregiver Pal (B2C Caregiver) | Why |
| --- | --- | --- |
| Power words: "Transform, Accelerate, Eliminate" | Warm, plainspoken relief language | Brand voice; power-words read as salesy/techy and repel this audience |
| ROI Calculator (revenue math) | "How It Works" 3-step + value-of-peace-of-mind framing | Dollar-ROI is the wrong frame for an emotional caregiving purchase |
| Integration & Security *for technical buyers* | **Privacy, Security & Safety** for an anxious consumer (+ medical-scope disclaimer) | Health data + non-technical, worried user |
| B2B case studies / "$2M ARR" metrics | Caregiver stories + emotional outcomes | Relatability beats corporate proof here |
| "Request Demo / Enterprise" CTAs | "Start free trial / See how Mae helps" | Self-serve, low-friction, low-commitment |
| Logo bar of enterprise clients | Trust via caregiver counts, expert endorsement, privacy badges | No enterprise logos to show; trust comes from peers and safety |

> ⚠️ **Honesty placeholders:** This PRD does **not** fabricate statistics, testimonials, or compliance certifications. Every stat, quote, and badge below is marked **[VERIFY]** or **[PLACEHOLDER]** and must be replaced with real, sourced content before launch. Suggested real sources are noted where relevant.

---

# Page Architecture & UI Components

## 1. Navigation Bar

**Requirements**
- **Position:** Fixed/sticky header, visible on scroll.
- **Components:**
  - Logo (left-aligned, links to home).
  - Primary links: **How It Works · What It Tracks · Stories · Pricing · Privacy**.
  - Secondary actions: **"Start free trial"** (primary CTA) · **"Sign in"** (text link).
- **Behavior:**
  - Desktop: horizontal nav.
  - Mobile: hamburger → slide-out drawer (single column, large tap rows).
  - Transparent over hero; solid warm surface (`#FFFFFF` / dark surface) after scroll, with subtle shadow.

**Specifications**
- Height: 72px desktop, 60px mobile. Max-width: 1280px, centered. Z-index: 1000.
- Primary CTA uses Twilight Indigo (`#2E3A59`), min 48px height.

---

## 2. Hero Section

**Goal:** In one screen, make a frazzled caregiver feel *seen* and offer relief.

**Layout:** Two-column split (≈55/45) — copy left, visual right. Stacks to single column < 1024px (copy first).

**Copy Structure**
- **Pre-headline badge (pill, icon):** social-proof or empathy cue.
  - Example: *"Built with caregivers, for caregivers"* or *"Trusted by [X,XXX] family caregivers"* **[VERIFY count]**.
- **Headline (H1), 40–70 chars, relief/outcome-focused — NOT B2B power words:**
  - Primary: *"Someone to help you carry it."*
  - Alt A: *"You don't have to hold all of it in your head."*
  - Alt B: *"A caregiving companion that keeps track, so you don't have to."*
- **Subheadline (2–3 sentences, ~150–220 chars):**
  - *"Caregiver Pal gives you a personal companion that keeps track of the medications, the counts, and the appointments — right in the texting app you already use. So you can stop drowning in sticky notes and just be there for the person you love."*
- **Dual CTA:**
  - Primary (high-contrast): **"Start your free trial"**
  - Secondary (ghost/outline): **"See how Mae helps"** (scrolls to How It Works / opens demo video)
- **Micro-copy under CTAs:** *"No credit card • Works on WhatsApp, Telegram & text • Cancel anytime"*

**Visual Component**
- **Type:** A phone mockup showing a warm chat thread with the companion ("Mae"), *not* a corporate dashboard.
  - Example exchange visible: a gentle reminder ("Time for your mom's evening meds 💊 — the white one and the peach one"), a logged reaction, and an appointment confirmation synced to calendar.
  - Subtle, calm looping animation (≤15s; gentle message-in, typing dots). Respect `prefers-reduced-motion`.
- **Dimensions:** retina-optimized; phone frame ~390×844 content area; WebP.

**Technical Specs**
- Section min-height: ~85vh (don't force a giant empty hero on mobile).
- Background: the **Dawn Arc** gradient used *softly* (low-opacity wash or a single calm corner), not a loud full-bleed.
- CTA buttons: min 48px touch target.

---

## 3. Problem / Pain Section

**Purpose:** Mirror the avatar's daily reality back to her so she thinks *"this is me."*

**Section Headline (question format that surfaces the pain):**
- *"Trying to keep it all straight — the meds, the counts, the appointments — in your own exhausted head?"*

**Structure:** 3-column grid (stacks to 1 column on mobile). Line icons, consistent stroke, brand-accent color.

| Pain (col) | Copy (grounded in the avatar/diary) | Supporting stat |
| --- | --- | --- |
| **The load that never shuts off** | "Even at work, you're tracking the next dose, the next refill, the next appointment in the back of your mind." | "[X]% of family caregivers report high emotional stress **[VERIFY — source: NAC/AARP, *Caregiving in the U.S.*]**" |
| **One change and your whole system is wrong** | "Sticky notes, a whiteboard, three group texts, and a notebook — and the second the doctor changes something, none of it matches." | "[X]% manage medications for their loved one **[VERIFY — source: NAC/AARP]**" |
| **The fear you'll miss something** | "Was that bruise normal, or is it the platelets? Did I give the right pill? What if she spikes a fever at 2 a.m. and I miss it?" | "[X] hours/week spent on caregiving tasks **[VERIFY — source: AARP]**" |

**Technical Specs**
- Background: gentle contrast tint vs. hero (warm light gray `#F2F1EE` or dark surface in dark mode).
- Padding: 120px desktop / 80px tablet / 60px mobile.
- Typography: H2 36px; body 18px; stat 40–48px bold.
- ⚠️ All statistics are **[VERIFY]** placeholders — confirm exact, current figures and citations before publishing.

---

## 4. Solution Positioning — "Meet Your Companion"

**Purpose:** Position Caregiver Pal as the answer — but as a *who*, not a *what*. Features come later.

**Headline:** *"Meet Mae — your caregiving companion."*

**Solution Narrative (3 short paragraphs):**
1. **Bridge:** "You shouldn't have to be a full-time logistics manager on top of being a daughter, a partner, an employee, and a human being who needs sleep."
2. **Approach:** "Caregiver Pal gives you a personal companion that lives right in your texting app. You tell it about your loved one — one thing at a time — and it quietly keeps track of the rest: the meds and their changes, the counts and their patterns, the daily care, the appointments."
3. **Outcome:** "It reminds you before anything slips, flags what's worth a call to the care team, and carries the mental load — so you can breathe, and be present."

**Visual Proof — Before / After:**
- **Before:** cluttered fridge of sticky notes, a smeared note, a half-filled pillbox at midnight.
- **After:** one calm chat thread; a clean timeline; a synced calendar.

**Unique Value Proposition Callout (highlighted box):**
- *"Unlike reminder apps and notebooks, Caregiver Pal doesn't just store information — it keeps track **with** you, in the app you already use, and tells you what needs attention right now."*

**Technical Specs:** centered, max-width 1100px; visual ~60% width desktop / full-width mobile; fade-in on scroll (reduced-motion safe); clean minimal background.

---

## 5. How It Works

**Purpose:** Kill the #1 objection — *"I don't have the time or brainpower to set up another app."*

**Headline:** *"Set it up in one conversation."*

**3 Steps (icon + short copy):**
1. **Say hello.** "Connect the app you already use and start texting your companion like you'd text a friend. No forms, no dashboards."
2. **Tell it about your loved one.** "Their meds, their schedule, what to watch for — one thing at a time. Mae remembers it all."
3. **Let it carry the load.** "Mae reminds you before doses and appointments, tracks counts and reactions, and flags what's worth a call. You just live your life a little lighter."

**Technical Specs:** horizontal 3-step on desktop, vertical on mobile; subtle staggered fade-in; max-width 1100px.

---

## 6. Features & Benefits ("What Your Companion Keeps Track Of")

**Structure:** Alternating image/text feature blocks (Feature 1 image-right, Feature 2 image-left, …). Each block: companion screenshot + H3 + benefit-focused copy (3–4 sentences) + a small "what this means for you" outcome line.

> Copy is benefit-first and in brand voice — features serve relief, never the reverse.

**Feature 1 — Talk to Mae (Companion Chat)**
- *"Your companion lives in the chat app you already use. Texting Mae feels like texting a calm, capable friend who happens to know caregiving — available at 11 p.m. and 2 a.m., never rushed, never judgmental."*
- **Outcome:** *"Someone in your corner, day and night."*

**Feature 2 — Medication & Reaction Tracker**
- *"Mae keeps every medication straight — doses, timing, and the changes the doctor makes along the way. Notice your loved one felt queasy? Tell Mae, and it threads that reaction back to the right medication, so nothing gets blamed on 'a bad day.'"*
- **Outcome:** *"No more smeared notes or guessing what changed."*

**Feature 3 — Counts Tracker (Platelets & Blood Counts)**
- *"Mae tracks the counts across each cycle, spots when they're trending low, and gives you the plain-English question to bring to the care team — so a surprise bruise isn't a midnight spiral."*
- **Outcome:** *"You walk into appointments ready, not anxious."*
- ⚠️ *Display copy must reinforce that Caregiver Pal organizes information and prompts questions — it does **not** interpret labs or give medical advice (see §8).*

**Feature 4 — Appointments, Synced**
- *"Connect your Google Calendar and Mae keeps every appointment in one place — reminding you in advance, with a quick prep checklist so you never lose a slot or walk in unprepared."*
- **Outcome:** *"Thursday is handled, and you know it."*

**Feature 5 — Daily Care & Routines**
- *"From hygiene to the little daily things that are easy to forget when you're running on fumes, Mae keeps a gentle, glanceable routine — check things off and feel them get done."*
- **Outcome:** *"The day has a rhythm again."*

**Feature 6 — Works Where You Already Are**
- *"Telegram, WhatsApp, text, or email — Caregiver Pal meets you on the app you already open a hundred times a day. Nothing new to learn."*
- **Outcome:** *"No new app to master. It's just a conversation."*

**Technical Specs:** each block max-width 1200px content; 100px between blocks; images 600×450 (consistent ratio), phone-framed; stack to single column < 768px; subtle fade+slide on scroll (reduced-motion safe).

---

## 7. Privacy, Security & Safety

**Purpose:** This section does heavy conversion work. The audience is handling a loved one's health information and is anxious by default. Reassure clearly and honestly. **Also replaces the B2B "integrations/compliance-for-IT" section.**

> 📎 **The on-page privacy claims here must be backed by real controls and documentation.** See the companion requirements doc — *Caregiver Pal — Data Governance, Privacy & Documentation Requirements* — which defines the full set of documentation artifacts, consent/audit/retention requirements, AI/LLM data-handling rules, and the regulatory landscape (FTC Health Breach Notification Rule, state consumer-health-data laws, HIPAA-if-applicable). Treat that document as a **release gate**: do not publish a privacy promise the documentation can't substantiate.

**7a — Your Information Is Private**
- Headline: *"Your loved one's information stays private. Always."*
- Brief, plain-English bullets:
  - "Encrypted in transit and at rest." **[VERIFY implementation]**
  - "We never sell your data — to anyone, ever."
  - "You can export or delete everything, anytime."
  - "You control which channel and what you share."
- Badges: privacy/compliance certifications **[PLACEHOLDER — only display certifications actually held, e.g., SOC 2, HIPAA posture; legal/compliance review REQUIRED before any claim].**

**7b — What Caregiver Pal Is (and Isn't)** — *Medical-scope disclaimer*
- Headline: *"A companion, not a doctor."*
- Copy: *"Caregiver Pal helps you organize, remember, and stay on top of caregiving. It does not diagnose, interpret lab results, or give medical advice. For anything urgent — a high fever, a serious reaction, a worrying symptom — contact your care team or call emergency services."*
- This disclaimer must also appear in-product and in the footer. **[Requires legal review.]**

**7c — Channel Caveat (transparency)**
- Where a channel is not end-to-end encrypted (e.g., standard SMS), disclose it plainly and recommend a secure channel for sensitive details. **[Engineering + legal to confirm wording.]**

**Technical Specs:** slight background tint; 50/50 split desktop (Privacy | Safety), stacked on mobile; badge max-height 80px (true colors); padding 100px.

---

## 8. Social Proof / Caregiver Stories

**Purpose:** Build trust through people who sound like the visitor — and credible expert backing.

**Primary Story (featured):**
- Layout: full-width feature — caregiver first name + context (e.g., "Denise, caring for her mom through chemo") **[use real, consented customers]**.
- 2–3 sentence quote about relief / "I finally slept" / "I got to be a daughter again." **[PLACEHOLDER — real testimonial required]**
- Optional photo (with consent). CTA: "Read her story."

**Supporting Testimonials:** 3-column card grid; 1–2 sentence quote + first name + context; equal-height cards. **[PLACEHOLDER — all real & consented.]**

**Expert Endorsement (optional, high-trust):** a brief quote from an oncology nurse or caregiver-support professional. **[VERIFY — real, credentialed, consented.]**

**Stats Bar:** 3–4 aggregate, *honest* metrics (e.g., "[X,XXX] caregivers supported · [X] reminders delivered · [X]% would recommend"). **[VERIFY all.]**

**Technical Specs:** content max-width 1200px; cards equal height (flex/grid); stack 2-col tablet → 1-col mobile; carousel only if > 6.

---

## 9. Pricing

**Purpose:** Simple, transparent, low-anxiety pricing. Overwhelmed people will not parse a complex matrix.

**Approach:** Free trial → one core plan, with an optional family/shared tier. Monthly/Annual toggle. **All prices PLACEHOLDER — confirm before launch.**

**Trial:** 14-day free trial, **no credit card required.**

| Plan | Price (proposed) | For | Includes | CTA |
| --- | --- | --- | --- | --- |
| **Companion** | **$39/mo** (or **$29/mo billed annually**) | One caregiver | Mae companion on your channel; medication & reaction tracking; counts tracking; calendar sync; daily care routines | **Start free trial** |
| **Family** | **$59/mo** (proposed) | Multiple caregivers for one loved one | Everything in Companion + shared updates so siblings/partners stay in the loop, shared timeline, multiple channels | **Start free trial** |

> The **Family** tier is grounded directly in the research: the avatar's resentment that siblings "help with a phone call." Letting the absent brother actually *see* updates is a real, emotional selling point.

**Trust indicators (near pricing):** *"No credit card for your trial · Cancel anytime · 30-day money-back guarantee"* **[confirm guarantee policy].**

**Pricing FAQ micro-section (3–4):**
- "Can I change or cancel anytime?"
- "What happens after the free trial?"
- "Do you offer any support for low-income caregivers / nonprofits?" **[confirm policy]**
- "Is my information private?" → links to §7.

**Technical Specs:** max-width 1200px (2 cards); equal-height cards (min 460px); monthly/annual toggle animates price; cards stack on mobile; subtle hover elevation; "Family" card gently highlighted (not aggressively).

---

## 10. FAQ

**Purpose:** Disarm the specific objections in the research. Accordion (collapsed by default to reduce overwhelm).

Suggested questions:
- **"Do I need to be good with technology?"** — "No. If you can send a text, you can use Caregiver Pal."
- **"Is this AI? I've heard about it but don't really get it."** — answer warmly, de-mystify, emphasize it's a companion that just talks to you. *(Note: do not lead with this; include because the audience is curious-but-wary.)*
- **"What if my loved one's medications change?"** — "Just tell Mae. It updates everything and keeps the history."
- **"Will it work with WhatsApp / Telegram / regular texts?"** — yes; list supported channels.
- **"Is my information private and secure?"** — short answer + link to §7.
- **"Does Caregiver Pal give medical advice?"** — "No — it helps you stay organized and prepared. For medical questions or emergencies, contact your care team."
- **"What does it cost / is there a free trial?"** — link to §9.

---

## 11. Demo / Video Section

**Purpose:** Let the not-yet-ready visitor *see* what texting Mae feels like.

- Headline: *"See Caregiver Pal in action."*
- Video: 2–3 min walkthrough showing a real-feeling conversation with Mae (reminder, logging a reaction, syncing an appointment). Professional thumbnail with play overlay; captions/subtitles; autoplay disabled; lazy-loaded.
- Secondary CTA below: *"Ready to try it yourself? Start your free trial."*
- **Technical:** 16:9, max-width 900px, centered, responsive.

---

## 12. Final CTA Section

**Purpose:** One last, gentle, high-impact push.

- **Headline:** *"You don't have to hold all of it alone."*
- **Supporting text:** *"Join the caregivers who've handed the tedious tracking to Caregiver Pal — and finally got to breathe. Start your free trial today. No credit card required."*
- **Dual CTA:** Primary **"Start your free trial"** · Secondary **"See how it works"**.
- **Trust elements:** *"14-day free trial · No credit card · Cancel anytime · Works on the apps you already use."*
- **Visual:** the Dawn Arc gradient as a warm full-width band; centered; max-width 800px text; generous padding (120–150px). Optional fade-in (reduced-motion safe).

---

## 13. Footer

**Structure:** Multi-column; collapses to single column (accordion) on mobile.

- **Company:** logo, one-line tagline (*"Someone to help you carry it."*), social icons, copyright.
- **Product:** How It Works · What It Tracks · Pricing · Channels · Privacy.
- **Resources:** Caregiver Guides / Blog · Help Center · Getting Started · Contact Support.
- **Company:** About · Careers · Contact · Press.
- **Legal:** Privacy Policy · Terms of Service · **Health Data / Medical Disclaimer** · Cookie Policy · Accessibility Statement.
- **Newsletter (optional):** *"Gentle caregiving tips, once a week."* email field + subscribe.

**Technical Specs:** contrast background; 5 cols desktop → 2–3 tablet → 1 mobile; 14px type; hover color change on links; 24px social icons; padding 80px top / 40px bottom.

> A crisis-resources line in the footer (e.g., caregiver support / 988 in the U.S.) is recommended given the audience's emotional load. **[Confirm appropriate, current resources before publishing.]**

---

# Visual Style Guide (Caregiver Pal Brand)

> Pulled directly from the Caregiver Pal Brand Identity & Design System. The source template's placeholder palette is **replaced** by these brand tokens.

## Color Palette

**Brand signature — "Dawn Arc" gradient** (dread → relief; night → morning):
```css
linear-gradient(135deg, #2E3A59 0%, #5A5E92 16%, #936F9E 33%, #E0879A 52%, #F4A36C 70%, #F6C56B 85%, #8FB98E 100%);
```

**Primary (from gradient):**
| Hex | Name | Role |
| --- | --- | --- |
| `#2E3A59` | Twilight Indigo | Primary action / buttons (AA with white text) |
| `#5A5E92` | Dusk Violet | Calm secondary |
| `#936F9E` | Heather | Soft accent |
| `#E0879A` | Dawn Rose | Warm accent / care moments |
| `#F4A36C` | Morning Peach | Hope accent |
| `#F6C56B` | Golden Hour | Highlight / relief |
| `#8FB98E` | Sage | Positive/confirmation states |

**Neutrals (warm — "home, not hospital"):**
- Text primary (Dark Blue): `#232B40` · Text secondary (Medium Gray): `#6B7280` · Background (warm Light Gray): `#F2F1EE` · Surface (White): `#FFFFFF` · Max contrast (soft Black): `#14161C`.

**Functional:** Success `#2F9E6B` · Warning `#E0A33C` · Error `#D45A4E` · Info `#3E7CC4`.

**Dark mode:** background `#14161C` / surfaces `#1B1E27`; verify all functional + text colors meet AA on dark. Dark mode is a priority (heavy late-night usage).

## Typography

- **Headings & emotional moments:** **DM Serif Display** (warmth, humanity, "personal letter" feel).
- **Body & UI:** **Inter** (screen-optimized legibility for tired eyes / older users).
- **Type scale:**

| Token | Desktop | Mobile | Weight | Line-height |
| --- | --- | --- | --- | --- |
| Display | 72px | 44px | 400 (serif) | 1.05 |
| H1 | 48px | 36px | 700 | 1.10 |
| H2 | 36px | 28px | 700 | 1.15 |
| H3 | 30px | 24px | 600 | 1.20 |
| H4 | 24px | 22px | 600 | 1.30 |
| Body Large | 18px | 18px | 400 | 1.60 |
| Body | 16px | 16px | 400 | 1.60 |
| Small | 14px | 14px | 400 | 1.50 |
| Caption | 12px | 12px | 400 | 1.40 |

- **Weights:** Light 300 · Regular 400 · Medium 500 · Semibold 600 · Bold 700.

## Spacing & Radius (tokens)
- Spacing: 4 / 8 / 16 / 24 / 32 / 48 / 64 px scale (8px base).
- Section padding: 120px desktop · 80px tablet · 60px mobile.
- Border radius: sm 2px · md 4px · lg 8px · xl 16px · full 9999px. (Cards/chat bubbles favor lg–xl for a soft, friendly feel.)

## Component Styles
- **Primary button:** Twilight Indigo bg, white text, radius 8px, padding 16×32, 16px/600; hover 10% darker; active scale 0.98; min 48px height.
- **Secondary/ghost:** transparent, 2px Twilight Indigo border, indigo text; hover 10% fill.
- **Cards:** white (light) / `#1B1E27` (dark), 1px border, radius 12px, soft shadow, 24–32px padding; subtle lift on hover.
- **Chat bubbles (custom):** companion bubble in a soft brand tint (e.g., Dawn Rose/Sage wash); user bubble neutral; generous radius; comfortable line-height.
- **Inputs:** 48px height, radius 6–8px, clear focus ring in Dawn Rose/Sage.
- **Icons:** Heroicons (line, 2px stroke) + custom SVGs (pill, droplet/counts, calendar-care, Mae glyph). 24px standard / 32px feature.

## Motion
- Calm and reassuring; never frantic. Timings: 150ms micro / 300ms standard / 500ms complex. Easing `cubic-bezier(0.4,0,0.2,1)`.
- Patterns: fade-in, slide-up (20px), gentle hover lift, restrained success confetti on care-streaks.
- **All motion respects `prefers-reduced-motion`** (degrade to fade/instant).

---

# Content & Voice Guidelines

## Voice & Tone (Brand)
- **Warm, steady, plainspoken, reassuring.** The voice of a calm, capable friend who's done this before.
- **Never** clinical, salesy, techy, or alarmist. **Never** lead with "AI."
- Speak *to* the reader; use plain English for medical terms ("counts," not jargon).

## Copywriting Principles (replaces the B2B principles)
- **Lead with relief, then the how.** "Stop holding it all in your head" before "tracks medications."
- **Be specific and human.** "Reminds you before the evening doses" beats "automated reminders."
- **Address fear gently, preemptively.** Privacy, "is this medical advice," "do I need to be techy."
- **No power-words, no false urgency, no scarcity.** *Explicitly retire* "Transform / Accelerate / Eliminate" and countdown-timer tactics from the source template — they break trust with this audience.
- **Dignify the reader.** They are competent and overwhelmed, not incompetent.

## Words & moves to AVOID
- Leading with "AI / agents / automation / platform."
- "Effortless / 10x / supercharge / game-changing."
- Guilt or fear-based pressure ("don't let your loved one down").
- Dense feature lists with no benefit.

## Example Copy (approved direction)
- **Hero:** "Someone to help you carry it."
- **Feature:** "Notice your loved one felt queasy? Tell Mae, and it threads that reaction back to the right medication — so nothing gets blamed on 'a bad day.'"
- **CTA:** "Start your free trial — no credit card." / "See how Mae helps."
- **Reassurance:** "A companion, not a doctor."

---

# Technical Requirements

## Performance
- Page load < 3s on 3G; FCP < 1.5s; TTI < 3.5s; Lighthouse > 90 across the board.

## Image Optimization
- WebP (with fallback); lazy-load below-fold; responsive `srcset`; compress (photos ≤ 200KB, graphics ≤ 50KB); optimized SVGs.

## Code Architecture (React + Tailwind + DaisyUI)
```
/components
  /Navbar
  /Hero
  /ProblemSection
  /SolutionMeetMae
  /HowItWorks
  /Features
  /PrivacySafety
  /Stories
  /Pricing
  /FAQ
  /DemoVideo
  /FinalCTA
  /Footer
  /shared        (Button, Card, Input, ChatBubble, Badge, SectionHeading)
```
- Functional components + hooks. React Context for theme (light/dark). Code-split heavy/below-fold sections (DemoVideo, Stories carousel).
- **Styling:** Tailwind utility-first + **DaisyUI** themes (light/dark mapped to brand tokens) + CSS variables for the design tokens; custom utilities for the Dawn Arc gradient and chat bubbles.

## Accessibility (WCAG 2.1 AA — treated as a brand value)
- Semantic HTML5; correct heading hierarchy (one H1, no skipped levels).
- Alt text on all images; ARIA labels on interactive elements (esp. chat preview, accordions, toggles).
- Full keyboard nav with logical focus order; **visible focus indicators** everywhere.
- Contrast ≥ 4.5:1 body / 3:1 large text; validate all functional colors on both themes.
- Respect `prefers-reduced-motion`. Baseline larger type and **≥44px touch targets** (older, fatigued users).

## SEO
- Title 50–60 chars (problem-aware, e.g., *"Caregiver Pal — Help keeping track of a loved one's cancer care"*).
- Meta description 150–160 chars. Open Graph + Twitter cards. JSON-LD: Organization, Product, FAQPage.
- Proper H1–H6; XML sitemap; robots.txt; internal links. **Target problem-aware search intent** ("how to keep track of chemo meds," "cancer caregiver organization," "medication tracker for caregivers") — not "AI agent" terms.

## Analytics & Tracking
- GA4. Event tracking: each CTA click, trial start, **channel-connect started/completed**, video plays, FAQ opens, pricing toggle, scroll depth (25/50/75/100%), form submissions.
- Heatmaps (Hotjar or similar). A/B testing capability.
- **Privacy-respecting analytics** and a clear consent/cookie banner (privacy-default, decline non-essential).

## Forms & Lead Capture
- **Free-trial start:** First name; email (validated); choose channel (Telegram/WhatsApp/SMS/email); optional "who are you caring for" (helps personalize Mae). Keep it short — every extra field costs this audience energy.
- **Email-only capture** (not-ready visitors): single field + value ("how it works" guide).
- Real-time validation with kind, plain-language errors; loading + success + error states; privacy link + explicit consent checkbox for health-related communications. **[legal review].**
- CRM/backend integration as needed (no PHI in analytics or URLs).

## Privacy/Security Engineering (must-haves)
- Encryption in transit + at rest; no PHI in query strings, logs, or analytics; data export & deletion; least-privilege access. Confirm regulatory posture (HIPAA applicability, SOC 2) with legal/compliance **before** any on-page claim.

## Browser Support
- Last 2 versions of Chrome, Firefox, Safari, Edge; Mobile Safari iOS 13+; Chrome Mobile Android 8+.

---

# Conversion Optimization

## A/B Testing Opportunities
- Hero headline (empathy vs. relief framing).
- Primary CTA copy ("Start your free trial" vs. "Meet your companion").
- Pricing default (monthly vs. annual; Companion-only vs. showing Family).
- Hero visual (chat mockup vs. short looping video).
- Trial length (14 vs. 30 days) and field count on signup.

## Personalization
- Channel-based entry (deep-link from a WhatsApp/Telegram ad pre-selects that channel).
- Cancer-type or role-based hero variants via URL params (e.g., caring for a parent vs. partner) — *kept subtle and respectful*.

## Exit-Intent (use with care)
- A **gentle**, non-manipulative offer only: a free caregiver guide / "how it works" overview, or "start your free trial when you're ready." **No guilt, no fake scarcity, no countdowns** — those violate the brand and erode trust with a vulnerable audience.

---

# Success Metrics

## Primary KPIs
- **Free-trial start rate:** target 3–5% of visitors **[set baseline]**.
- **Channel-connect completion:** target ≥ 60% of trial-starters reach first message to Mae.
- **Trial → paid conversion:** target **[set with finance]**.
- **Time on page:** 2–3 min+. **Scroll depth:** 50%+ reach Final CTA.
- **Bounce rate:** < 50% **[calibrate for emotional traffic]**.

## Secondary
- Page speed; signup-form completion rate; video play rate; FAQ engagement; CTA-level CTR; traffic-source conversion.

---

# Development Handoff

## Priority Order
1. **Navbar + Hero** (first impression / emotional hook).
2. **Problem + Meet Mae** (resonance + value prop).
3. **How It Works + Features** (core product understanding).
4. **Privacy/Safety** (trust — conversion-critical here).
5. **Pricing + FAQ** (conversion).
6. **Stories** (proof; gated on real testimonials).
7. **Final CTA + Footer.**
8. **Polish:** dark mode, animations, performance, A/B infra. (Demo video can be phase 2.)

## Testing Checklist
- [ ] Responsive across all breakpoints (phone-first).
- [ ] All links/CTAs functional and tracked.
- [ ] Trial + email forms validate, submit, handle errors; consent captured.
- [ ] Video/media + lazy-load verified; captions present.
- [ ] Page-speed targets met.
- [ ] Accessibility audit passed (incl. reduced-motion, focus, contrast, screen reader).
- [ ] Cross-browser + iOS/Android tested.
- [ ] Analytics events verified.
- [ ] SEO meta + structured data correct.
- [ ] Dark mode consistent.
- [ ] **Privacy & medical disclaimers present and legally reviewed.**

## Design Assets Needed
- Logo (SVG, light/dark). Mae companion glyph/avatar (SVG).
- Phone-framed chat mockups (hero + per-feature), WebP.
- Before/after illustrations (sticky-note chaos → calm thread).
- Custom line icons (pill, droplet, calendar-care, routine).
- Real, consented caregiver photos/quotes **[pending]**.
- Privacy/compliance badges **[only those actually held]**.
- Walkthrough video (MP4/H.264, 1080p) + captions.

---

# Open Questions / To Confirm Before Build

1. **Real statistics + citations** for the Problem section (NAC/AARP *Caregiving in the U.S.*, American Cancer Society, etc.).
2. **Compliance & legal:** HIPAA applicability, encryption posture, what certifications can be displayed; sign-off on the **medical-scope disclaimer** and health-data consent language.
3. **Real, consented testimonials** and any expert endorsement.
4. **Final pricing & tiers** (Companion / Family), trial length, refund/guarantee, low-income or nonprofit policy.
5. **Channels at launch** (Telegram / WhatsApp / SMS / email — and the SMS-encryption disclosure).
6. **Brand/product name lock** ("Caregiver Pal") and the companion-naming UX (is "Mae" default, user-chosen, or assigned?).
7. **Crisis-resources** line for the footer (appropriate, current).

---

*This PRD adapts a B2B SaaS landing-page template to Caregiver Pal's B2C, high-empathy context. It is written to be actionable for AI-assisted build tools (Cursor/Windsurf/Claude) and human developers alike, while keeping every decision anchored to the Caregiver Pal brand system and the problem-aware avatar research.*
