import {
  MessageCircleHeart,
  Pill,
  Droplet,
  CalendarCheck,
  Sun,
  Smartphone,
} from 'lucide-react'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

// A compact, themed visual panel for each feature (stand-in for the
// phone-framed companion screenshots called for in the PRD).
function Visual({ type }) {
  const wrap =
    'surface relative aspect-[4/3] w-full overflow-hidden rounded-2xl p-5 shadow-soft flex flex-col justify-center gap-3'

  if (type === 'chat')
    return (
      <div className={wrap}>
        <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md px-3.5 py-2 text-sm" style={{ background: 'color-mix(in srgb, var(--text) 6%, var(--surface))', color: 'var(--text)' }}>
          You still up? I'm here whenever you need me. 🌙
        </div>
        <div className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-twilight px-3.5 py-2 text-sm text-white">
          Can't sleep. Did I already give the 11pm dose?
        </div>
        <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md px-3.5 py-2 text-sm" style={{ background: 'color-mix(in srgb, var(--text) 6%, var(--surface))', color: 'var(--text)' }}>
          You did — logged at 10:52. You're all caught up. Rest easy.
        </div>
      </div>
    )

  if (type === 'meds')
    return (
      <div className={wrap}>
        {[
          { name: 'White tablet', meta: '2× daily · taken', tone: '#2F9E6B' },
          { name: 'Peach tablet', meta: 'morning · taken', tone: '#2F9E6B' },
          { name: 'New med (Thu)', meta: 'queasy → flagged', tone: '#E0A33C' },
        ].map((m) => (
          <div key={m.name} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background: 'color-mix(in srgb, var(--text) 5%, var(--surface))' }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: m.tone }} />
            <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{m.name}</span>
            <span className="ml-auto text-xs text-muted">{m.meta}</span>
          </div>
        ))}
      </div>
    )

  if (type === 'counts')
    return (
      <div className={wrap}>
        <div className="flex items-end justify-between gap-2" style={{ height: '60%' }}>
          {[70, 62, 55, 48, 44, 38].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i >= 4 ? '#E0A33C' : '#8FB98E' }} />
          ))}
        </div>
        <p className="text-xs text-muted">Platelets trending low — a question to ask the care team.</p>
      </div>
    )

  if (type === 'calendar')
    return (
      <div className={wrap}>
        <div className="rounded-xl px-4 py-3" style={{ background: 'color-mix(in srgb, #3E7CC4 12%, var(--surface))' }}>
          <p className="text-xs font-semibold text-info">THURSDAY · 9:30 AM</p>
          <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text)' }}>Blood draw — Oncology</p>
          <p className="mt-0.5 text-xs text-muted">Synced to your Google Calendar</p>
        </div>
        <ul className="space-y-1.5 text-sm text-muted">
          <li>✓ Bring insurance card</li>
          <li>✓ List of current meds</li>
          <li>✓ Questions for the nurse</li>
        </ul>
      </div>
    )

  if (type === 'routine')
    return (
      <div className={wrap}>
        {['Morning meds', 'Hydration', 'Short walk', 'Evening meds'].map((t, i) => (
          <label key={t} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text)' }}>
            <span className={`flex h-5 w-5 items-center justify-center rounded-md text-xs ${i < 3 ? 'bg-sage text-white' : ''}`} style={i < 3 ? {} : { border: '2px solid var(--border)' }}>
              {i < 3 ? '✓' : ''}
            </span>
            <span className={i < 3 ? 'line-through opacity-60' : ''}>{t}</span>
          </label>
        ))}
      </div>
    )

  // channels
  return (
    <div className={wrap}>
      <div className="grid grid-cols-2 gap-3">
        {['WhatsApp', 'Telegram', 'Text (SMS)', 'Email'].map((c) => (
          <div key={c} className="flex items-center justify-center rounded-xl px-3 py-4 text-sm font-medium" style={{ background: 'color-mix(in srgb, var(--text) 5%, var(--surface))', color: 'var(--text)' }}>
            {c}
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted">Nothing new to learn.</p>
    </div>
  )
}

const features = [
  {
    icon: MessageCircleHeart,
    type: 'chat',
    title: 'Talk to Mae',
    body: 'Your companion lives in the chat app you already use. Texting Mae feels like texting a calm, capable friend who happens to know caregiving — available at 11 p.m. and 2 a.m., never rushed, never judgmental.',
    outcome: 'Someone in your corner, day and night.',
  },
  {
    icon: Pill,
    type: 'meds',
    title: 'Medication & reaction tracker',
    body: "Mae keeps every medication straight — doses, timing, and the changes the doctor makes along the way. Notice your loved one felt queasy? Tell Mae, and it threads that reaction back to the right medication, so nothing gets blamed on 'a bad day.'",
    outcome: 'No more smeared notes or guessing what changed.',
  },
  {
    icon: Droplet,
    type: 'counts',
    title: 'Counts tracker (platelets & blood counts)',
    body: 'Mae tracks the counts across each cycle, spots when they’re trending low, and gives you the plain-English question to bring to the care team — so a surprise bruise isn’t a midnight spiral.',
    outcome: 'You walk into appointments ready, not anxious.',
    note: 'Caregiver Pal organizes information and prompts questions — it does not interpret labs or give medical advice.',
  },
  {
    icon: CalendarCheck,
    type: 'calendar',
    title: 'Appointments, synced',
    body: 'Connect your Google Calendar and Mae keeps every appointment in one place — reminding you in advance, with a quick prep checklist so you never lose a slot or walk in unprepared.',
    outcome: 'Thursday is handled, and you know it.',
  },
  {
    icon: Sun,
    type: 'routine',
    title: 'Daily care & routines',
    body: 'From hygiene to the little daily things that are easy to forget when you’re running on fumes, Mae keeps a gentle, glanceable routine — check things off and feel them get done.',
    outcome: 'The day has a rhythm again.',
  },
  {
    icon: Smartphone,
    type: 'channels',
    title: 'Works where you already are',
    body: 'Telegram, WhatsApp, text, or email — Caregiver Pal meets you on the app you already open a hundred times a day. Nothing new to learn.',
    outcome: "No new app to master. It's just a conversation.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container-cp">
        <SectionHeading
          eyebrow="What it tracks"
          title="What your companion keeps track of"
          subtitle="Everything below serves one thing: lifting the weight off you. Features come second to relief."
        />

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {features.map((f, i) => {
            const imageLeft = i % 2 === 1
            return (
              <div
                key={f.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={imageLeft ? 'lg:order-2' : ''}>
                  <div className="max-w-lg">
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: 'color-mix(in srgb, #E0879A 16%, transparent)' }}
                    >
                      <f.icon className="text-rose" size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="heading-serif text-2xl sm:text-3xl" style={{ color: 'var(--text)' }}>
                      {f.title}
                    </h3>
                    <p className="mt-4 text-body-lg text-muted">{f.body}</p>
                    <p className="mt-4 inline-flex items-center gap-2 font-semibold text-sage">
                      <span className="text-lg">→</span> {f.outcome}
                    </p>
                    {f.note && (
                      <p className="mt-4 rounded-xl px-4 py-3 text-sm text-muted" style={{ background: 'color-mix(in srgb, #3E7CC4 8%, transparent)', border: '1px solid var(--border)' }}>
                        ⓘ {f.note}
                      </p>
                    )}
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={imageLeft ? 'lg:order-1' : ''}>
                  <Visual type={f.type} />
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
