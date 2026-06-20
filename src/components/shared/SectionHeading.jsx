import Reveal from './Reveal'

// Consistent section header: optional eyebrow, serif title, supporting text.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-heather">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-serif text-3xl leading-tight sm:text-4xl" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-muted" style={{ maxWidth: '46rem' }}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
