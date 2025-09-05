/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: {
          DEFAULT: 'var(--color-background)',
          dark: 'var(--color-background-dark)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          dark: 'var(--color-surface-dark)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          dark: 'var(--color-text-dark)',
          muted: 'var(--color-text-muted)',
          'muted-dark': 'var(--color-text-muted-dark)',
        }
      },
      animation: {
        'theme-transition': 'theme-transition 0.5s ease-in-out',
      },
      keyframes: {
        'theme-transition': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
