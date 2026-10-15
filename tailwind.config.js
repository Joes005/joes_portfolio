/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'rgb(var(--canvas-rgb) / <alpha-value>)',
          light: '#F5F2EB',
          dark: '#0A0A0A',
          subtle: 'rgb(var(--canvas-subtle-rgb) / <alpha-value>)',
          'subtle-dark': '#141414',
          card: 'rgb(var(--canvas-card-rgb) / <alpha-value>)',
          'card-dark': '#121212',
        },
        night: {
          DEFAULT: '#0D0D0B', // Pamidor night section background
          body: '#C2C0B8',
          muted: '#8E8D88',
          hr: 'rgba(255, 255, 255, 0.12)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink-rgb) / <alpha-value>)',
          light: '#0A0A0A',
          dark: '#F8F8F8',
          muted: 'rgb(var(--ink-muted-rgb) / <alpha-value>)',
          'muted-dark': '#999999',
        },
        accent: {
          DEFAULT: '#D12424', // Pamidor Vermilion Red
          red: '#D12424',
          hover: '#B51B1B',
        },
        rule: {
          DEFAULT: 'rgb(var(--rule-rgb) / <alpha-value>)',
          light: '#DCD8CF',
          dark: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        funnel: ['Funnel Display', 'Plus Jakarta Sans', 'sans-serif'],
        space: ['Space Grotesk', 'monospace'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 7.5vw, 8.5rem)', { lineHeight: '0.88', letterSpacing: '-0.035em' }],
        'section': ['clamp(1.75rem, 3.8vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'lead': ['clamp(1.25rem, 2.2vw, 2.15rem)', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        'body-lg': ['clamp(1rem, 1.25vw, 1.25rem)', { lineHeight: '1.55', letterSpacing: '-0.01em' }],
      }
    },
  },
  plugins: [],
}
