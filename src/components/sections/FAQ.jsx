import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from '../shared/Reveal'
import SectionHeading from '../shared/SectionHeading'

const faqs = [
  {
    q: 'Do I need to be good with technology?',
    a: 'No. If you can send a text, you can use Caregiver Pal. There’s nothing to install and nothing to set up — you just start a conversation.',
  },
  {
    q: 'Is this AI? I’ve heard about it but don’t really get it.',
    a: 'Think of it as a companion that simply talks to you, like texting a calm friend who happens to know caregiving. It remembers what you tell it and gently keeps track — that’s all you need to know to use it.',
  },
  {
    q: 'What if my loved one’s medications change?',
    a: 'Just tell Mae. It updates everything and keeps the history, so your notes are never out of date again.',
  },
  {
    q: 'Will it work with WhatsApp, Telegram, or regular texts?',
    a: 'Yes — Caregiver Pal works on WhatsApp, Telegram, standard text (SMS), and email. You pick whichever you already use.',
  },
  {
    q: 'Is my information private and secure?',
    a: 'Yes. Your information is encrypted and never sold. See the Privacy, Security & Safety section above for the details.',
  },
  {
    q: 'Does Caregiver Pal give medical advice?',
    a: 'No — it helps you stay organized and prepared. For medical questions or emergencies, contact your care team or call emergency services.',
  },
  {
    q: 'What does it cost — is there a free trial?',
    a: 'There’s a 14-day free trial with no credit card. After that, plans start at $39/month. See Pricing above.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  return (
    <div className="surface rounded-xl">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-medium" style={{ color: 'var(--text)' }}>{q}</span>
        <ChevronDown
          size={20}
          className="shrink-0 text-muted transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container-cp">
        <SectionHeading eyebrow="Questions" title="The things caregivers ask us." />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <Item {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
