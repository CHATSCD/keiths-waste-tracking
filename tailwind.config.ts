import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        keiths: {
          primary: '#DC143C',    // Crimson red
          secondary: '#FFD700',  // Gold
          dark: '#1a1a1a',
          light: '#f5f5f5',
        },
        status: {
          good: '#10B981',       // Green
          warning: '#F59E0B',    // Orange/Yellow
          danger: '#EF4444',     // Red
          cold: '#3B82F6',       // Blue
          hot: '#F97316',        // Orange
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}
export default config