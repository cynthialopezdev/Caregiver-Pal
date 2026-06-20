import { Heart, MessageCircle } from 'lucide-react'
import Reveal from '../shared/Reveal'
import PhoneMockup from '../shared/PhoneMockup'

const heroMessages = [
  {
    from: 'mae',
    text: "Time for your mom's evening meds 💊 — the white one and the peach one.",
  },
  { from: 'me', text: 'Done. She seemed a little queasy after dinner though.' },
  {
    from: 'mae',
    text: "Noted — I'll watch that with the new medication. And Thursday's blood draw is on your calendar. I'll remind you Tuesday.",
  },
  { from: 'typing' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[60px] lg:pt-[72px]">
      {/* soft Dawn Arc wash in the corner — calm, not loud (PRD) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'var(--tw-gradient, linear-gradient(135deg,#936F9E,#E0879A,#F6C56B,#8FB98E))' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[460px] w-[460px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(135deg,#5A5E92,#936F9E)' }}
      />

      <div className="container-cp grid min-h-[85vh] items-center gap-12 py-14 lg:grid-cols-[55fr_45fr] lg:py-20">
        {/* copy */}
        <div className="max-w-xl">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              <Heart size={15} className="text-rose" fill="#E0879A" />
              Built with caregivers, for caregivers
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="heading-serif mt-6 text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              Someone to help <span className="text-gradient">you carry it.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-body-lg text-muted">
              Caregiver Pal gives you a personal companion that keeps track of the medications, the
              counts, and the appointments — right in the texting app you already use. So you can
              stop drowning in sticky notes and just be there for the person you love.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#trial" className="btn-primary">
                Start your free trial
              </a>
              <a href="#how-it-works" className="btn-ghost">
                <MessageCircle size={18} /> See how Mae helps
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 text-sm text-muted">
              No credit card • Works on WhatsApp, Telegram &amp; text • Cancel anytime
            </p>
          </Reveal>
        </div>

        {/* visual */}
        <Reveal delay={0.15} className="lg:justify-self-end">
          <PhoneMockup messages={heroMessages} caption="Tonight" />
        </Reveal>
      </div>
    </section>
  )
}
