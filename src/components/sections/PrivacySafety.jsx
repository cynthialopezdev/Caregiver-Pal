import {
  ShieldCheck,
  Lock,
  EyeOff,
  Bot,
  Trash2,
  ToggleRight,
  LinkIcon,
  Stethoscope,
  MessageSquareWarning,
  ArrowRight,
} from 'lucide-react'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

// Privacy claims are grounded in the companion Data Governance doc and PRD §7a.
// Anything not yet contractually/technically confirmed stays marked as pending.
const privacyPoints = [
  {
    icon: Lock,
    title: 'Encrypted in transit and at rest',
    body: 'Your loved one’s information is protected with strong encryption, every step of the way.',
    pending: '[VERIFY implementation]',
  },
  {
    icon: EyeOff,
    title: 'We never sell your data — to anyone, ever',
    body: 'Your caregiving details are not a product. We don’t sell or share them to advertise to you.',
  },
  {
    icon: Bot,
    title: 'Never used to train outside AI models',
    body: 'What you tell your companion stays yours — it isn’t used to train third-party models.',
    pending: '[pending provider confirmation]',
  },
  {
    icon: Trash2,
    title: 'Export or delete everything, anytime',
    body: 'You stay in control. Take your information with you or remove it whenever you choose.',
  },
  {
    icon: ToggleRight,
    title: 'You control the channel and what you share',
    body: 'Choose where your companion lives and how much you tell it. You set the terms.',
  },
  {
    icon: LinkIcon,
    title: 'No health details in links, logs, or ads',
    body: 'Sensitive information is kept out of web addresses, analytics, and error reports.',
  },
]

export default function PrivacySafety() {
  return (
    <section id="privacy" className="py-16 sm:py-24" style={{ background: 'color-mix(in srgb, var(--text) 4%, var(--bg))' }}>
      <div className="container-cp">
        <SectionHeading
          eyebrow="Privacy, security & safety"
          title="Your loved one's information stays private. Always."
          subtitle="You're managing someone you love's health information — often on their behalf. We treat that with the care, consent, and safeguards it deserves."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Privacy */}
          <Reveal>
            <div className="surface h-full rounded-2xl p-7 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <ShieldCheck className="text-sage" size={26} />
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>How we protect your information</h3>
              </div>
              <ul className="grid gap-5 sm:grid-cols-2">
                {privacyPoints.map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <p.icon className="mt-0.5 shrink-0 text-heather" size={20} />
                    <div>
                      <p className="font-medium leading-snug" style={{ color: 'var(--text)' }}>{p.title}</p>
                      <p className="mt-1 text-sm text-muted">{p.body}</p>
                      {p.pending && <p className="mt-1 text-xs italic text-muted opacity-70">{p.pending}</p>}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Trust Center link (Data Governance GOV-05) */}
              <a
                href="#trust-center"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-twilight transition-colors hover:text-rose dark:text-rose"
              >
                Visit our Trust Center — what we collect, why, and your controls
                <ArrowRight size={16} />
              </a>

              <p className="mt-5 rounded-xl px-4 py-3 text-xs italic text-muted" style={{ background: 'color-mix(in srgb, var(--text) 5%, transparent)' }}>
                Every claim here is backed by our documented data-governance practices — and
                independently reviewed before launch. [Compliance badges placeholder — display only
                certifications actually held (e.g. SOC 2, HIPAA posture); legal/compliance review required.]
              </p>
            </div>
          </Reveal>

          {/* Safety */}
          <Reveal delay={0.1}>
            <div className="surface flex h-full flex-col rounded-2xl p-7 shadow-soft">
              <div className="mb-5 flex items-center gap-3">
                <Stethoscope className="text-rose" size={26} />
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>A companion, not a doctor</h3>
              </div>
              <p className="text-muted">
                Caregiver Pal helps you organize, remember, and stay on top of caregiving. It does not
                diagnose, interpret lab results, or give medical advice. For anything urgent — a high
                fever, a serious reaction, a worrying symptom — contact your care team or call emergency
                services.
              </p>

              <div className="mt-6 flex gap-4 rounded-xl p-4" style={{ background: 'color-mix(in srgb, #E0A33C 12%, transparent)' }}>
                <MessageSquareWarning className="mt-0.5 shrink-0 text-warning" size={20} />
                <p className="text-sm text-muted">
                  Some channels (like standard SMS) aren’t end-to-end encrypted. We’ll tell you plainly
                  and suggest a more secure channel for sensitive details.
                  <span className="block opacity-70"> [Engineering + legal to confirm wording.]</span>
                </p>
              </div>

              {/* Caregiver-on-behalf-of-patient note (Data Governance REQ-SCOPE) */}
              <div className="mt-4 flex gap-4 rounded-xl p-4" style={{ background: 'color-mix(in srgb, #3E7CC4 10%, transparent)' }}>
                <ShieldCheck className="mt-0.5 shrink-0 text-info" size={20} />
                <p className="text-sm text-muted">
                  Caring for someone else means handling their information. We record your consent to do
                  so and respect the patient’s privacy rights, too.
                  <span className="block opacity-70"> [Approach to confirm with counsel.]</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
