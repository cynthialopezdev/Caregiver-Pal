import { MessageSquareHeart, ListChecks, HandHeart } from 'lucide-react'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

const steps = [
  {
    icon: MessageSquareHeart,
    n: '1',
    title: 'Say hello',
    body: "Connect the app you already use and start texting your companion like you'd text a friend. No forms, no dashboards.",
  },
  {
    icon: ListChecks,
    n: '2',
    title: 'Tell it about your loved one',
    body: 'Their meds, their schedule, what to watch for — one thing at a time. Mae remembers it all.',
  },
  {
    icon: HandHeart,
    n: '3',
    title: 'Let it carry the load',
    body: "Mae reminds you before doses and appointments, tracks counts and reactions, and flags what's worth a call. You just live your life a little lighter.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24"
      style={{ background: 'color-mix(in srgb, var(--text) 4%, var(--bg))' }}
    >
      <div className="container-cp">
        <SectionHeading eyebrow="How it works" title="Set it up in one conversation." />

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px md:block"
            style={{ background: 'linear-gradient(90deg, transparent, var(--border) 15%, var(--border) 85%, transparent)' }}
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12} className="relative text-center">
              <div
                className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl shadow-soft"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <s.icon className="text-rose" size={30} strokeWidth={1.6} />
              </div>
              <div className="mx-auto mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-twilight text-sm font-bold text-white dark:bg-rose">
                {s.n}
              </div>
              <h3 className="mt-4 text-xl font-semibold" style={{ color: 'var(--text)' }}>
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <a href="#trial" className="btn-primary">
              Start your free trial
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
