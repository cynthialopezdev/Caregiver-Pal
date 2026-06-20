import { Quote } from 'lucide-react'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

// All quotes are PLACEHOLDERS. Per PRD, no fabricated testimonials —
// these must be replaced with real, consented caregiver stories before launch.
const featured = {
  quote:
    'For the first time in months, I slept all the way through. I wasn’t the only one holding the list anymore — and I finally got to just be my mom’s daughter again.',
  name: 'Caregiver story',
  context: 'caring for a parent through chemo',
}

const testimonials = [
  { quote: 'It’s just texting. I didn’t have to set up a single thing.', name: 'Placeholder', context: 'caring for a partner' },
  { quote: 'It caught a reaction I would’ve blamed on a bad day.', name: 'Placeholder', context: 'caring for a parent' },
  { quote: 'Thursday’s appointment just… happened. No scramble.', name: 'Placeholder', context: 'sandwich-generation caregiver' },
]

export default function Stories() {
  return (
    <section id="stories" className="py-16 sm:py-24">
      <div className="container-cp">
        <SectionHeading
          eyebrow="Caregiver stories"
          title="You're not the only one holding the list."
        />

        <Reveal>
          <figure
            className="mx-auto mt-12 max-w-4xl rounded-3xl p-8 text-center shadow-soft sm:p-12"
            style={{ background: 'linear-gradient(135deg, color-mix(in srgb,#936F9E 14%, var(--surface)), color-mix(in srgb,#E0879A 14%, var(--surface)))', border: '1px solid var(--border)' }}
          >
            <Quote className="mx-auto text-heather" size={32} />
            <blockquote className="heading-serif mt-5 text-2xl leading-snug sm:text-3xl" style={{ color: 'var(--text)' }}>
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm font-medium text-muted">
              — {featured.name}, {featured.context}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="surface flex h-full flex-col rounded-2xl p-6 shadow-soft">
                <Quote className="text-rose/70" size={22} />
                <blockquote className="mt-3 flex-1 text-muted">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {t.name} · <span className="text-muted">{t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-xs italic text-muted opacity-70">
            Stories shown are placeholders. Only real, consented caregiver testimonials will appear at launch.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
