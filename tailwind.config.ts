import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

import typographyStyles from './typography'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'selector',
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      colors: {
        accent: colors.violet,
      },
      fontFamily: {
        // `--font-active` is set per language in tailwind.css
        sans: ['var(--font-active)', 'system-ui', 'sans-serif'],
        fa: ['var(--font-fa)', 'system-ui', 'sans-serif'],
        en: ['var(--font-en)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(1.5rem)', filter: 'blur(6px)' },
          to: { opacity: '1', transform: 'none', filter: 'none' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(6%, 4%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 6%, 0) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'gradient-x': 'gradient-x 6s ease infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        float: 'float 2s ease-in-out infinite',
      },
    },
  },
} satisfies Config
