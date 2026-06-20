import { LogoMark } from '../shared/Logo'

const columns = [
  {
    title: 'Product',
    links: ['How It Works', 'What It Tracks', 'Pricing', 'Channels', 'Privacy'],
  },
  {
    title: 'Resources',
    links: ['Caregiver Guides', 'Trust Center', 'Help Center', 'Getting Started', 'Contact Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Press'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Medical Disclaimer', 'Cookie Policy', 'Accessibility'],
  },
]

// In-page anchors for links that map to real sections on this page.
const FOOTER_HREFS = {
  'How It Works': '#how-it-works',
  'What It Tracks': '#features',
  Pricing: '#pricing',
  Privacy: '#privacy',
  'Trust Center': '#trust-center',
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="container-cp py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-lg font-bold" style={{ color: 'var(--text)' }}>Caregiver Pal</span>
            </div>
            <p className="heading-serif mt-4 text-lg" style={{ color: 'var(--text)' }}>
              Someone to help you carry it.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href={FOOTER_HREFS[l] || '#'}
                      className="text-sm text-muted transition-colors hover:text-rose"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* newsletter */}
        <div className="mt-12 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between" style={{ background: 'color-mix(in srgb, var(--text) 4%, var(--bg))' }}>
          <div>
            <p className="font-medium" style={{ color: 'var(--text)' }}>Gentle caregiving tips, once a week.</p>
            <p className="text-sm text-muted">No spam. Just a little support in your inbox.</p>
          </div>
          <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="you@email.com"
              className="min-h-[48px] flex-1 rounded-full px-4 text-sm"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
            />
            <button type="submit" className="btn-primary !px-5">Subscribe</button>
          </form>
        </div>

        {/* medical + crisis line */}
        <div className="mt-10 space-y-3 border-t pt-8 text-sm text-muted" style={{ borderColor: 'var(--border)' }}>
          <p>
            <strong style={{ color: 'var(--text)' }}>A companion, not a doctor.</strong> Caregiver Pal does
            not diagnose, interpret lab results, or give medical advice. For anything urgent, contact your
            care team or call emergency services.
          </p>
          <p>
            If you or someone you're caring for is in crisis, you're not alone — in the U.S. you can call or
            text <strong>988</strong> (Suicide &amp; Crisis Lifeline). <span className="opacity-70">[Confirm current, appropriate resources before publishing.]</span>
          </p>
          <p className="pt-2">© {new Date().getFullYear()} Caregiver Pal. Made with care for the people holding everything together.</p>
        </div>
      </div>
    </footer>
  )
}
