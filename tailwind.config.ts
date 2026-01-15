import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rye: ['var(--font-rye)'],
        thunder: ['var(--font-thunder)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
