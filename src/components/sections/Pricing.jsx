import { useState } from 'react'
import { Check } from 'lucide-react'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

const plans = [
  {
    name: 'Companion',
    monthly: 39,
    annual: 29,
    for: 'One caregiver',
    features: [
      'Your Mae companion on the channel you use',
      'Medication & reaction tracking',
      'Counts tracking',
      'Google Calendar sync',
      'Daily care routines',
    ],
    highlighted: false,
  },
  {
    name: 'Family',
    monthly: 59,
    annual: 49,
    for: 'Multiple caregivers, one loved one',
    features: [
      'Everything in Companion',
      'Shared updates so siblings & partners stay in the loop',
      'Shared care timeline',
      'Multiple channels',
    ],
    highlighted: true,
  },
]

const pricingFaq = [
  { q: 'Can I change or cancel anytime?', a: 'Yes. You can change plans or cancel whenever you like — no calls, no hassle.' },
  { q: 'What happens after the free trial?', a: 'Your 14-day trial is free with no credit card. You only choose a plan if you decide to keep going.' },
  { q: 'Do you offer support for low-income caregivers or nonprofits?', a: 'We want Caregiver Pal to be reachable. [Policy to confirm before launch.]' },
  { q: 'Is my information private?', a: 'Yes — see Privacy, Security & Safety above for exactly how we protect it.' },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-16 sm:py-24" style={{ background: 'color-mix(in srgb, var(--text) 4%, var(--bg))' }}>
      <div className="container-cp">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, honest pricing."
          subtitle="Start with a 14-day free trial — no credit card required. About a dollar a day to stop carrying all of it in your head."
        />

        {/* toggle */}
        <Reveal>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!annual ? '' : 'text-muted'}`} style={!annual ? { color: 'var(--text)' } : {}}>
              Monthly
            </span>
            <button
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              onClick={() => setAnnual((a) => !a)}
              className="relative h-7 w-12 rounded-full transition-colors"
              style={{ background: annual ? '#2E3A59' : 'var(--border)' }}
            >
              <span
                className="absolute top-1 h-5 w-5 rounded-full bg-white transition-transform"
                style={{ transform: annual ? 'translateX(22px)' : 'translateX(4px)' }}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? '' : 'text-muted'}`} style={annual ? { color: 'var(--text)' } : {}}>
              Annual <span className="text-sage">(save ~25%)</span>
            </span>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className="relative flex h-full min-h-[460px] flex-col rounded-2xl p-8 shadow-soft"
                style={{
                  background: 'var(--surface)',
                  border: p.highlighted ? '2px solid #E0879A' : '1px solid var(--border)',
                }}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 right-6 rounded-full bg-rose px-3 py-1 text-xs font-semibold text-white">
                    Keep siblings in the loop
                  </span>
                )}
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.for}</p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="heading-serif text-5xl" style={{ color: 'var(--text)' }}>
                    ${annual ? p.annual : p.monthly}
                  </span>
                  <span className="mb-2 text-muted">/mo{annual ? ', billed annually' : ''}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm" style={{ color: 'var(--text)' }}>
                      <Check className="mt-0.5 shrink-0 text-sage" size={18} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#trial" className={`mt-7 w-full ${p.highlighted ? 'btn-primary' : 'btn-ghost'}`}>
                  Start free trial
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-sm text-muted">
            No credit card for your trial · Cancel anytime · 30-day money-back guarantee
            <span className="opacity-70"> [confirm guarantee policy]</span>
          </p>
          <p className="mt-2 text-center text-xs italic text-muted opacity-70">
            Prices proposed — confirm before launch.
          </p>
        </Reveal>

        {/* pricing FAQ */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {pricingFaq.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="surface h-full rounded-xl p-5">
                <p className="font-medium" style={{ color: 'var(--text)' }}>{f.q}</p>
                <p className="mt-2 text-sm text-muted">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
