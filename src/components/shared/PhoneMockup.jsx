import { motion, useReducedMotion } from 'framer-motion'

// Mae's avatar — a soft companion glyph, never clinical.
function MaeAvatar({ size = 32 }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #E0879A 0%, #F4A36C 70%, #F6C56B 100%)',
      }}
      aria-hidden="true"
    >
      <span className="text-sm font-bold text-white">M</span>
    </div>
  )
}

function MaeBubble({ children, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="flex items-end gap-2"
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <MaeAvatar />
      <div
        className="max-w-[80%] rounded-2xl rounded-bl-md px-4 py-2.5 text-sm leading-relaxed shadow-sm"
        style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}
      >
        {children}
      </div>
    </motion.div>
  )
}

function MeBubble({ children, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="flex justify-end"
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-twilight px-4 py-2.5 text-sm leading-relaxed text-white shadow-sm">
        {children}
      </div>
    </motion.div>
  )
}

function TypingBubble({ delay = 0 }) {
  return (
    <div className="flex items-end gap-2" style={{ animationDelay: `${delay}s` }}>
      <MaeAvatar />
      <div
        className="flex items-center gap-1 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        aria-label="Mae is typing"
      >
        {[0, 0.2, 0.4].map((d) => (
          <span
            key={d}
            className="h-2 w-2 rounded-full bg-heather animate-typing-dot"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </div>
    </div>
  )
}

// A phone frame wrapping a warm chat thread with Mae.
// `messages` is an array of { from: 'mae' | 'me' | 'typing', text, node }.
export default function PhoneMockup({ messages, caption = 'Today', className = '' }) {
  return (
    <div className={`relative mx-auto w-full max-w-[340px] ${className}`}>
      {/* soft glow behind the phone */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3rem] opacity-50 blur-2xl"
        style={{ background: 'linear-gradient(135deg, #936F9E33, #E0879A44, #F6C56B33)' }}
      />
      <div
        className="overflow-hidden rounded-[2.5rem] border-[10px] shadow-lift"
        style={{ borderColor: '#14161C', background: 'var(--bg)' }}
      >
        {/* status / header bar */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
        >
          <MaeAvatar size={36} />
          <div className="leading-tight">
            <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
              Mae
            </p>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-sage" /> here with you
            </p>
          </div>
        </div>

        {/* thread */}
        <div className="flex flex-col gap-3 px-3.5 py-4" role="log" aria-label="Chat with Mae">
          <p className="self-center rounded-full px-3 py-0.5 text-xs text-muted" style={{ background: 'var(--border)' }}>
            {caption}
          </p>
          {messages.map((m, i) => {
            const delay = 0.15 * i
            if (m.from === 'typing') return <TypingBubble key={i} delay={delay} />
            if (m.from === 'me')
              return (
                <MeBubble key={i} delay={delay}>
                  {m.node || m.text}
                </MeBubble>
              )
            return (
              <MaeBubble key={i} delay={delay}>
                {m.node || m.text}
              </MaeBubble>
            )
          })}
        </div>
      </div>
    </div>
  )
}
