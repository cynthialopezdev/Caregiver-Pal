# Caregiver Pal Brand Identity & Design System

## Brand Identity

*Contribution led by the Brand Strategist*

### Brand Essence

Caregiver Pal exists to lift an invisible weight off the people quietly holding their families together. Distilled from the value proposition and the lived reality of our avatar, the brand stands on seven core attributes:

- **Companionship** — Every customer gets a named, anthropomorphized agent (e.g., *Mae*) who speaks to them personally. The brand is a *someone*, not a *something*. The throughline of the research is "I'm not the only one holding the list anymore."
- **Reassurance** — Calm in the middle of crisis. We meet people at 11 p.m. and 2 a.m., and the brand's job is to quiet the dread, never amplify it.
- **Reliability** — The product's whole promise is *never dropping the ball*. Trust is earned by remembering meds, counts, and appointments so the caregiver doesn't have to.
- **Warmth & Humanity** — Deliberately *not* clinical and *not* techy. Caregiver Pal should feel like a competent friend who happens to know nursing, not like medical software.
- **Clarity** — No overwhelm, no setup burden, no jargon. One thing at a time. The audience is exhausted; simplicity is a moral obligation, not a feature.
- **Vigilance** — Attentive in the background. Caregiver Pal catches the thread the caregiver is terrified of missing (the bruise, the dose change, the reaction).
- **Empowerment & Dignity** — The deepest benefit isn't tracking; it's giving the caregiver their *presence* and their own life back. Caregiver Pal restores the daughter, not just the coordinator.

### Brand Voice

- **Tone:** Warm, steady, plainspoken, and reassuring. Never alarmist, never clinical, never salesy. The voice of a calm, capable friend who has done this before and is sitting right next to you. It can hold heavy emotion without flinching and without melodrama.
- **Language:** Clear, jargon-free, and human. We translate medical complexity into plain English ("your counts," not hematology terminology), use short sentences, and speak *to* the person by name. We lead with relief and care — never with the word "AI," which intimidates this audience. We say "Mae will keep an eye on that," not "the system will process your inputs."
- **Communication Style:** Companion-led and proactive. Caregiver Pal reminds *before* something slips, takes things "one thing at a time," and frames everything around benefit and relief rather than features. It is emotionally attuned, dignifying, and quietly competent — it carries the load so the caregiver doesn't have to carry it in their own exhausted head.

### Brand Narrative

For the millions of people like Denise — middle-income, employed, and suddenly the default caregiver for a parent or partner with cancer — the hardest part isn't the love. It's the load. The smeared pharmacy notes, the ransom-note fridge of sticky reminders, the pillbox refilled three times at midnight and still not trusted, the bruise that might be nothing or might be the platelets, the Thursday appointment that lives only in an overwhelmed mind. **Caregiver Pal** gives each of these caregivers a personal companion — a named agent like Mae — who lives in the phone and the chat apps they already use, and who quietly holds all of it: the medications and their changes and reactions, the blood counts and their patterns, the daily care routines, and the appointments synced straight to their calendar. Caregiver Pal doesn't ask them to learn new software or "use AI." It just starts talking, one thing at a time, until the frantic goes quiet and they can breathe again — until they get to be a daughter again instead of a logistics manager. That is what Caregiver Pal is for: setting down a weight you forgot was a choice to carry.

---

## Design System

*Contribution led by the Lead UI/UX Designer and Lead Front-End Developer*

### Color Palette

#### Primary Colors

- **Gradient Base:** The brand's visual identity is the *Dawn Arc* gradient — a deliberate journey from the twilight of the caregiver's hardest hours into warm morning light and new growth, mirroring the emotional arc from dread to relief documented in the research. This gradient is the signature of the Caregiver Pal brand:

```css
linear-gradient(135deg, #2E3A59 0%, #5A5E92 16%, #936F9E 33%, #E0879A 52%, #F4A36C 70%, #F6C56B 85%, #8FB98E 100%);
```

- **Primary Colors (extracted from the gradient):**

| Hex | Name | Attribute |
| --- | --- | --- |
| `#2E3A59` | Twilight Indigo | Steadiness |
| `#5A5E92` | Dusk Violet | Calm |
| `#936F9E` | Heather | Comfort |
| `#E0879A` | Dawn Rose | Care |
| `#F4A36C` | Morning Peach | Hope |
| `#F6C56B` | Golden Hour | Relief |
| `#8FB98E` | Sage | Renewal |

> **Application note:** *Twilight Indigo* is the primary UI action color (high contrast, reads trustworthy, passes AA with white text). *Dawn Rose* and *Morning Peach* are the warm emotional accents used sparingly for moments of care and success. *Sage* grounds the brand in growth and is used for confirmations and calm-positive states.

#### Secondary Colors

A warm, low-clinical neutral set for everyday UI — chosen to feel like a home, not a hospital.

| Role | Name | Hex |
| --- | --- | --- |
| Primary Text | Dark Blue | `#232B40` |
| Secondary Text | Medium Gray | `#6B7280` |
| Backgrounds | Light Gray (warm) | `#F2F1EE` |
| Surface | White | `#FFFFFF` |
| Max Contrast | Black (soft) | `#14161C` |

#### Functional Colors

Clear and unmistakable, but tuned to inform rather than alarm an already-anxious user.

| Role | Hex | Usage |
| --- | --- | --- |
| Success | `#2F9E6B` | Completed care tasks, healthy/expected ranges |
| Warning | `#E0A33C` | Approaching thresholds (e.g., counts trending low), dose changes pending review |
| Error | `#D45A4E` | Missed-dose alerts, values needing a call to the care team |
| Info | `#3E7CC4` | Mae's tips, contextual explanations, neutral notices |

---

### Typography

#### Font Family

- **Primary Font: Inter (sans-serif).** Inter is screen-optimized, exceptionally legible at small sizes, and designed for UI. This matters more here than almost anywhere: the user is often reading on a phone, late at night, with tired eyes and divided attention, and a meaningful share of the audience is older. Inter's open apertures and generous x-height keep medication names, doses, and counts unambiguous. Its neutral-but-friendly character supports a tone that is human without being cute.
- **Secondary Font: DM Serif Display (serif).** Reserved for major headlines and emotional moments. The serif introduces warmth, humanity, and an almost hand-written, editorial quality — a deliberate counterweight to "cold software." It makes Caregiver Pal feel like a personal letter from a companion (the diary voice) rather than a dashboard, reinforcing the anthropomorphized brand.

#### Font Sizes

Base: `16px = 1rem`. Body line-heights are intentionally generous for readability under stress and fatigue.

| Token | rem | px | Line Height |
| --- | --- | --- | --- |
| Display | 4.5rem | 72px | 1.05 |
| H1 | 3rem | 48px | 1.10 |
| H2 | 2.25rem | 36px | 1.15 |
| H3 | 1.875rem | 30px | 1.20 |
| H4 | 1.5rem | 24px | 1.30 |
| H5 | 1.25rem | 20px | 1.40 |
| H6 | 1.125rem | 18px | 1.40 |
| Body (Regular) | 1rem | 16px | 1.60 |
| Body (Small) | 0.875rem | 14px | 1.50 |
| Body (XSmall) | 0.75rem | 12px | 1.50 |
| Caption | 0.75rem | 12px | 1.40 |

#### Font Weights

| Weight | Value |
| --- | --- |
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |

---

### UI Components

#### 21st.dev Components

Foundational, accessible building blocks pulled by category:

- **Navigation** — bottom tab bar / hamburger, companion switcher, breadcrumb trails for care areas.
- **Layout** — responsive containers, cards, stacks, and grids for timelines and dashboards.
- **Forms** — medication entry, reaction logging, dose-change capture, daily-care check-offs.
- **Feedback** — toasts, banners, inline validation, alert dialogs for time-sensitive events.
- **Data Display** — tables, stat blocks, badges, and timelines for meds, counts, and appointments.
- **Disclosure** — accordions and collapsibles for "the details" so the default view stays calm and uncluttered.
- **Overlay** — modals, drawers, and bottom sheets for quick logging from anywhere in the app.

#### MagicUI Components

At least five animated components selected to add reassurance and delight without ever feeling frantic:

1. **Animated List** — daily-care and medication items that check off and gently settle into place, making "done" feel tangible.
2. **Number Ticker** — counts, streaks ("12 days, no missed doses"), and trend values that count up softly to celebrate progress.
3. **Border Beam** — a quiet glow around Mae's active/listening state, signaling "your companion is here" without noise.
4. **Animated Beam** — visualizes the connection between Caregiver Pal and the user's Google Calendar / pharmacy data, reinforcing "it's all linked, you don't have to."
5. **Confetti (restrained)** — a small, soft burst on streak milestones and completed care days — celebration that respects the emotional weight of the context.
6. **Text Animation (typing/shimmer)** — Mae's messages render with a gentle "typing" feel, making the companion feel present and alive.

#### reactbits.dev Components

Pulled by category to enrich motion and presentation:

- **Text Animations** — Split Text / Blur Text for warm headline reveals (e.g., onboarding and emotional moments).
- **Animations** — Animated Content and fade/slide reveals for timelines and cards as they enter the viewport.
- **Components** — Spotlight and Magnet effects for primary CTAs and Mae's call-to-talk button.
- **Backgrounds** — soft, low-motion gradient/aurora backdrops derived from the Dawn Arc for hero and onboarding surfaces.

#### Custom Components

Essential, business-specific components that must be built in-house:

1. **Companion Chat Interface ("Talk to Mae")** — the heart of the product. A familiar, messaging-app-style thread (mirroring Telegram/WhatsApp/SMS) with the named agent's avatar, presence indicator, and proactive nudges. Feels like texting a person, not configuring software.
2. **Medication & Reaction Timeline** — a chronological view of current medications, dose changes over time, and logged side effects — with reactions *threaded* to the meds that may have caused them, so nothing gets blamed on "a bad day."
3. **Counts Tracker (Platelets / Blood Counts)** — a trend visualization that plots counts over chemo cycles, flags low-and-falling patterns (the "plum-sized bruise" fear), and surfaces the plain-English question to ask the care team.
4. **Care Calendar & Daily-Care Card** — two-way Google Calendar sync for appointments with prep checklists and reminders, paired with the recurring daily hygiene/care routine as a glanceable, check-off widget.

---

### Micro-Interactions

Subtle motion that lowers cognitive load and reassures. Every interaction below has a `prefers-reduced-motion` fallback.

- **Button Hover/Press** — a gentle 2px lift with a soft warm shadow on hover; a calm scale-down (0.98) on press. Confident, never bouncy.
- **Form Focus** — a soft 2px ring in Dawn Rose / Sage with an easing glow, so the active field is obvious to tired eyes.
- **Loading States** — Mae's "typing" dots and shimmer skeletons rather than spinners — motion that feels like *someone working on it*, never anxious churn.
- **Success Actions** — a soft check animation in Sage and a restrained confetti burst on streaks/completed care days.
- **Navigation Transitions** — smooth cross-fades and slide transitions between care areas to preserve orientation and reduce overwhelm.
- **Scroll Reveals** — content fades and rises subtly into view, pacing information so nothing arrives all at once.

---

### Responsive Design

*Contribution led by the Lead Front-End Developer*

- **Mobile-First Approach:** This is the core principle and it is non-negotiable — the phone *is* the product. The primary interface is a chat channel on a mobile device, so every layout, target, and flow is designed for one-handed, on-the-go, low-attention use first, then enhanced upward.
- **Breakpoints (Tailwind CSS):**

| Token | Min Width |
| --- | --- |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

- **Mobile Adaptations:**
  - Simplified navigation via a bottom tab bar (thumb-reachable) and hamburger for secondary items.
  - Fully stacked, single-column layouts for timelines, counts, and care lists.
  - Large touch targets (minimum 44×44px) for tired hands and older users; generous spacing to prevent mis-taps.
  - Primary actions (talk to Mae, log a dose, mark care done) anchored in the lower thumb zone.
  - Concise content density — surface the next right thing, hide the rest behind disclosure.

---

### Accessibility

Accessibility is a brand value here, not a checkbox — the audience skews older, fatigued, and often using assistive tech for an aging loved one.

- **Color Contrast (WCAG AA):** All text and meaningful UI meets AA contrast minimums; functional colors are validated against their backgrounds.
- **Keyboard Navigation:** Full operability via keyboard, with logical focus order across all flows.
- **Screen Reader Support (ARIA):** Semantic HTML and ARIA roles/labels throughout, with special care for the chat interface, timelines, and alerts.
- **Visible Focus Indicators:** Clear, high-contrast focus rings on every interactive element (never `outline: none` without a replacement).
- **Respect for Reduced Motion:** All animations honor `prefers-reduced-motion`, degrading gracefully to instant or fade-only states.
- **Plus:** larger default type, scalable text without breakage, and 44px+ targets as baseline standards.

---

### Dark/Light Mode

Both modes are fully supported, implemented through **DaisyUI themes** mapped to the Caregiver Pal design tokens. The app uses **automatic system-preference detection** and a **user-selectable toggle**. Dark mode is more than aesthetic here: the research shows heavy late-night and 2 a.m. usage, so a low-glare dark theme directly serves the core use case, reducing eye strain in exactly the moments the caregiver needs Caregiver Pal most.

---

## Implementation Guidelines

*Contribution led by the Lead Front-End Developer*

### CSS Framework

- **Tailwind CSS** — utility-first foundation.
- **DaisyUI** — semantic theming and component theming (drives light/dark modes).
- **Custom Utilities** — a Caregiver Pal token layer for brand gradient, elevation, and motion presets.

### Animation Library

- **Framer Motion** — for complex, orchestrated, and stateful animations (chat message entrances, timeline reveals, milestone celebrations, layout transitions).
- **Tailwind Animations** — for simple, performant transitions (hovers, focus rings, fades).

### Icon System

- **Heroicons** — comprehensive, accessible, and stylistically consistent with Inter.
- **Custom SVGs** — for brand-specific marks: pill, droplet (counts), calendar-care, and the Mae companion glyph.

### Asset Management

- **SVG** — icons and brand marks (crisp, scalable, themeable).
- **WebP** — photographic and illustrative imagery (optimized weight).
- **MP4 / WebM** — video assets (onboarding, testimonial, explainer).

### Code Structure

- **Component-Based Architecture** — small, composable, reusable components with clear single responsibilities.
- **Utility-First CSS** — Tailwind utilities as the default styling layer, with tokens for consistency.
- **Responsive Variants** — mobile-first breakpoint variants applied systematically across components.

---

## Design Tokens

```json
{
  "colors": {
    "primary": {
      "twilightIndigo": "#2E3A59",
      "duskViolet": "#5A5E92",
      "heather": "#936F9E",
      "dawnRose": "#E0879A",
      "morningPeach": "#F4A36C",
      "goldenHour": "#F6C56B",
      "sage": "#8FB98E"
    },
    "neutral": {
      "darkBlue": "#232B40",
      "mediumGray": "#6B7280",
      "lightGray": "#F2F1EE",
      "white": "#FFFFFF",
      "black": "#14161C"
    },
    "functional": {
      "success": "#2F9E6B",
      "warning": "#E0A33C",
      "error": "#D45A4E",
      "info": "#3E7CC4"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "Inter, sans-serif",
      "secondary": "DM Serif Display, serif"
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  "borderRadius": {
    "sm": "0.125rem",
    "md": "0.25rem",
    "lg": "0.5rem",
    "xl": "1rem",
    "full": "9999px"
  }
}
```
