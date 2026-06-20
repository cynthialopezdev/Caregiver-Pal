import { Database, Target, Lock, SlidersHorizontal, ArrowRight } from 'lucide-react'
import Reveal from '../shared/Reveal'

// Plain-language privacy hub summary (Data Governance GOV-05): what we collect,
// why, how it's protected, and the controls you have.
const pillars = [
  {
    icon: Database,
    title: 'What we keep track of',
    body: 'Medications and changes, reactions, blood counts, appointments, and daily-care notes — only what helps your companion help you.',
  },
  {
    icon: Target,
    title: 'Why we hold it',
    body: 'To remind you, spot patterns, and prepare you for the care team. Never to sell, advertise, or train outside AI models.',
  },
  {
    icon: Lock,
    title: 'How it’s protected',
    body: 'Encrypted in transit and at rest, least-privilege access, and audit trails — with documented practices reviewed before launch.',
  },
  {
    icon: SlidersHorizontal,
    title: 'The controls you have',
    body: 'Export or delete everything anytime, choose your channel, and withdraw consent whenever you like.',
  },
]

export default function TrustCenter() {
  return (
    <section id="trust-center" className="py-16 sm:py-24">
      <div className="container-cp">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-heather">
            Trust Center
          </span>
          <h2 className="heading-serif text-3xl leading-tight sm:text-4xl" style={{ color: 'var(--text)' }}>
            Plain language. No fine print.
          </h2>
          <p className="mt-4 text-body-lg text-muted">
            Here’s the short version of how your loved one’s information is handled. The full details
            live in our privacy practices.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="surface flex h-full flex-col rounded-2xl p-6 shadow-soft">
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'color-mix(in srgb, #8FB98E 18%, transparent)' }}
                >
                  <p.icon className="text-sage" size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold leading-snug" style={{ color: 'var(--text)' }}>{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#privacy-policy" className="btn-ghost">
              Read our full privacy practices <ArrowRight size={18} />
            </a>
            <p className="text-xs italic text-muted opacity-70">
              Backed by a documented data-governance framework. Final policies pending legal review.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
