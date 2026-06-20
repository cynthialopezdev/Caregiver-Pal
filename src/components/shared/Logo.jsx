// Brand mark: a "dawn arc" rising over a heart — night-to-morning, care.
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cp-arc" x1="4" y1="34" x2="36" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A5E92" />
          <stop offset="0.45" stopColor="#E0879A" />
          <stop offset="0.8" stopColor="#F4A36C" />
          <stop offset="1" stopColor="#F6C56B" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="#2E3A59" />
      {/* rising arc */}
      <path
        d="M7 27a13 13 0 0 1 26 0"
        stroke="url(#cp-arc)"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* heart cradled in the dawn */}
      <path
        d="M20 30.5c-4.6-3-7.4-5.7-7.4-9.1a3.7 3.7 0 0 1 7.4-1.2 3.7 3.7 0 0 1 7.4 1.2c0 3.4-2.8 6.1-7.4 9.1Z"
        fill="#F2F1EE"
      />
    </svg>
  )
}

export function Logo({ className = '' }) {
  return (
    <a
      href="#top"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Caregiver Pal — home"
    >
      <LogoMark />
      <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--text)' }}>
        Caregiver&nbsp;Pal
      </span>
    </a>
  )
}
