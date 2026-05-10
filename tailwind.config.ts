import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020812',
        navy: '#071527',
        gold: '#d8ae6a',
        amberglow: '#f2c074',
        pearl: '#f7ead5'
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 60px rgba(216, 174, 106, 0.18)'
      }
    },
  },
  plugins: [],
}
export default config
