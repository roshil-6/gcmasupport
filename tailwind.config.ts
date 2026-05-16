import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'gold-soft': '0 4px 24px rgba(201, 169, 97, 0.12), 0 0 0 1px rgba(201, 169, 97, 0.08)',
        'gold-hover': '0 12px 40px rgba(201, 169, 97, 0.18), 0 0 0 1px rgba(201, 169, 97, 0.15)',
        lift: '0 2px 8px rgba(51, 51, 51, 0.06), 0 12px 32px rgba(51, 51, 51, 0.08)',
      },
      colors: {
        black: '#333333',
        gold: {
          50: '#fffef7',
          100: '#fffcee',
          200: '#fff8d6',
          300: '#fff0b5',
          400: '#ffe082',
          500: '#ffd54f',
          600: '#ffc107',
          700: '#ffb300',
          800: '#ffa000',
          900: '#ff8f00',
          DEFAULT: '#d4af37',
          metallic: '#c9a961',
          rich: '#b8860b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 30px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
