import { useTheme } from './lib/useTheme'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import ProblemSection from './components/sections/ProblemSection'
import SolutionMeetMae from './components/sections/SolutionMeetMae'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import PrivacySafety from './components/sections/PrivacySafety'
import TrustCenter from './components/sections/TrustCenter'
import Stories from './components/sections/Stories'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/sections/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      {/* Skip link for keyboard users (a11y) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-lg focus:bg-twilight focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <ProblemSection />
        <SolutionMeetMae />
        <HowItWorks />
        <Features />
        <PrivacySafety />
        <TrustCenter />
        <Stories />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
