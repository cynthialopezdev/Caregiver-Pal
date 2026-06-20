import { Sparkles } from 'lucide-react'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

function BeforeAfter() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {/* Before */}
      <Reveal>
        <div
          className="h-full rounded-2xl p-6"
          style={{ background: 'color-mix(in srgb, var(--text) 5%, var(--bg))', border: '1px solid var(--border)' }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">Before</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { t: 'White pills 2x?', c: '#F6C56B', r: '-3deg' },
              { t: 'Thursday — blood draw??', c: '#E0879A', r: '2deg' },
              { t: 'new med — smeared', c: '#F4A36C', r: '-1deg' },
              { t: 'call on-call nurse', c: '#8FB98E', r: '3deg' },
              { t: 'bruise — platelets?', c: '#936F9E', r: '-2deg' },
              { t: 'refill Mon', c: '#F6C56B', r: '1deg' },
            ].map((n) => (
              <span
                key={n.t}
                className="rounded-sm px-3 py-2 text-xs font-medium text-ink shadow-sm"
                style={{ background: n.c, transform: `rotate(${n.r})` }}
              >
                {n.t}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            A fridge like a ransom note. A pillbox you've refilled three times and still don't trust.
          </p>
        </div>
      </Reveal>

      {/* After */}
      <Reveal delay={0.1}>
        <div className="surface h-full rounded-2xl p-6 shadow-soft">
          <span className="text-xs font-semibold uppercase tracking-wider text-sage">After</span>
          <ul className="mt-4 space-y-3">
            {[
              'Evening meds — reminded, done ✓',
              'Thursday blood draw — on your calendar',
              'New med + reaction — threaded together',
              'Counts trend — watched for you',
            ].map((line) => (
              <li key={line} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text)' }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">One calm thread. A clean timeline. A synced calendar.</p>
        </div>
      </Reveal>
    </div>
  )
}

export default function SolutionMeetMae() {
  return (
    <section id="meet-mae" className="py-16 sm:py-24">
      <div className="container-cp">
        <SectionHeading
          eyebrow="Meet your companion"
          title="Meet Mae — your caregiving companion."
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="space-y-5 text-body-lg text-muted">
              <p>
                You shouldn't have to be a full-time logistics manager on top of being a daughter, a
                partner, an employee, and a human being who needs sleep.
              </p>
              <p>
                Caregiver Pal gives you a personal companion that lives right in your texting app. You
                tell it about your loved one — one thing at a time — and it quietly keeps track of the
                rest: the meds and their changes, the counts and their patterns, the daily care, the
                appointments.
              </p>
              <p style={{ color: 'var(--text)' }} className="font-medium">
                It reminds you before anything slips, flags what's worth a call to the care team, and
                carries the mental load — so you can breathe, and be present.
              </p>
            </div>
          </Reveal>

          <BeforeAfter />
        </div>

        {/* UVP callout */}
        <Reveal delay={0.1}>
          <div
            className="mx-auto mt-12 max-w-4xl rounded-2xl p-8 text-center shadow-soft"
            style={{ background: 'linear-gradient(135deg, color-mix(in srgb,#E0879A 14%, var(--surface)), color-mix(in srgb,#F6C56B 14%, var(--surface)))', border: '1px solid var(--border)' }}
          >
            <Sparkles className="mx-auto mb-3 text-peach" size={26} />
            <p className="heading-serif text-2xl leading-snug" style={{ color: 'var(--text)' }}>
              Unlike reminder apps and notebooks, Caregiver Pal doesn't just store information — it
              keeps track <span className="text-gradient">with you</span>, in the app you already use,
              and tells you what needs attention right now.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
