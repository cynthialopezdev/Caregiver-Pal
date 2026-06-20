import Reveal from '../shared/Reveal'

export default function FinalCTA() {
  return (
    <section id="trial" className="px-5 py-16 sm:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24">
          {/* Dawn Arc band */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dawn-arc opacity-95" />
          <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: 'rgba(20,22,28,0.18)' }} />

          <h2 className="heading-serif mx-auto max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
            You don't have to hold all of it alone.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg text-white/90">
            Join the caregivers who've handed the tedious tracking to Caregiver Pal — and finally got
            to breathe. Start your free trial today. No credit card required.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#signup"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-twilight transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:scale-[0.98]"
            >
              Start your free trial
            </a>
            <a
              href="#how-it-works"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:scale-[0.98]"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm text-white/85">
            14-day free trial · No credit card · Cancel anytime · Works on the apps you already use.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
