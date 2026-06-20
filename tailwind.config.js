/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Caregiver Pal "Dawn Arc" brand palette
        twilight: '#2E3A59', // Twilight Indigo — primary action
        dusk: '#5A5E92', // Dusk Violet — calm secondary
        heather: '#936F9E', // Heather — soft accent
        rose: '#E0879A', // Dawn Rose — warm care accent
        peach: '#F4A36C', // Morning Peach — hope accent
        golden: '#F6C56B', // Golden Hour — relief highlight
        sage: '#8FB98E', // Sage — positive / confirmation
        // Warm neutrals — "home, not hospital"
        ink: '#232B40', // primary text
        slatey: '#6B7280', // secondary text
        cream: '#F2F1EE', // warm light background
        soft: '#14161C', // soft black / dark mode bg
        // Functional
        success: '#2F9E6B',
        warning: '#E0A33C',
        error: '#D45A4E',
        info: '#3E7CC4',
        // Dark mode surfaces
        'dark-surface': '#1B1E27',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.05' }],
        h1: ['3rem', { lineHeight: '1.10' }],
        h2: ['2.25rem', { lineHeight: '1.15' }],
        h3: ['1.875rem', { lineHeight: '1.20' }],
        h4: ['1.5rem', { lineHeight: '1.30' }],
        'body-lg': ['1.125rem', { lineHeight: '1.60' }],
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      maxWidth: {
        content: '1280px',
      },
      backgroundImage: {
        'dawn-arc':
          'linear-gradient(135deg, #2E3A59 0%, #5A5E92 16%, #936F9E 33%, #E0879A 52%, #F4A36C 70%, #F6C56B 85%, #8FB98E 100%)',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(35, 43, 64, 0.18)',
        lift: '0 12px 32px -10px rgba(35, 43, 64, 0.28)',
      },
      keyframes: {
        'typing-dot': {
          '0%, 60%, 100%': { opacity: '0.25', transform: 'translateY(0)' },
          '30%': { opacity: '1', transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'typing-dot': 'typing-dot 1.4s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
