import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Logo } from '../shared/Logo'

const LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'What It Tracks', href: '#features' },
  { label: 'Stories', href: '#stories' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Privacy', href: '#privacy' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled ? 'shadow-soft backdrop-blur-md' : ''
      }`}
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--surface) 88%, transparent)' : 'transparent',
      }}
    >
      <nav className="container-cp flex h-[60px] items-center justify-between lg:h-[72px]">
        <Logo />

        {/* desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-rose"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#signin" className="hidden text-sm font-medium text-muted hover:text-rose sm:inline">
            Sign in
          </a>
          <a href="#trial" className="hidden btn-primary !px-5 !py-2.5 text-sm sm:inline-flex">
            Start free trial
          </a>

          {/* mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-black/5 lg:hidden dark:hover:bg-white/10"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div
          className="lg:hidden"
          style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
        >
          <div className="container-cp flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                style={{ color: 'var(--text)' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#trial"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Start free trial
            </a>
            <a
              href="#signin"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-center text-sm font-medium text-muted"
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
