import { Brain, StickyNote, AlertCircle } from 'lucide-react'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

const pains = [
  {
    icon: Brain,
    title: 'The load that never shuts off',
    body: "Even at work, you're tracking the next dose, the next refill, the next appointment in the back of your mind.",
    stat: '[X]%',
    statNote: 'of family caregivers report high emotional stress',
    source: '[VERIFY — NAC/AARP, Caregiving in the U.S.]',
  },
  {
    icon: StickyNote,
    title: 'One change and your whole system is wrong',
    body: 'Sticky notes, a whiteboard, three group texts, and a notebook — and the second the doctor changes something, none of it matches.',
    stat: '[X]%',
    statNote: 'manage medications for their loved one',
    source: '[VERIFY — NAC/AARP]',
  },
  {
    icon: AlertCircle,
    title: "The fear you'll miss something",
    body: 'Was that bruise normal, or is it the platelets? Did I give the right pill? What if she spikes a fever at 2 a.m. and I miss it?',
    stat: '[X] hrs',
    statNote: 'per week spent on caregiving tasks',
    source: '[VERIFY — AARP]',
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-16 sm:py-24"
      style={{ background: 'color-mix(in srgb, var(--text) 4%, var(--bg))' }}
    >
      <div className="container-cp">
        <SectionHeading
          title="Trying to keep it all straight — the meds, the counts, the appointments — in your own exhausted head?"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="surface flex h-full flex-col rounded-2xl p-7 shadow-soft">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: 'color-mix(in srgb, #936F9E 16%, transparent)' }}
                >
                  <p.icon className="text-heather" size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-muted">{p.body}</p>

                <div className="mt-6 border-t pt-5" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-4xl font-bold text-twilight dark:text-rose">{p.stat}</p>
                  <p className="mt-1 text-sm text-muted">{p.statNote}</p>
                  <p className="mt-1 text-xs italic text-muted opacity-70">{p.source}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs italic text-muted opacity-70">
            Statistics shown are placeholders pending verified, current figures and citations before launch.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
