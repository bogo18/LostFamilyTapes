/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f1ea',
        'paper-dark': '#e5e0d8',
        ink: '#1b2a49',
        tape: '#333333',
        alert: '#D93025',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        hand: ['"Dancing Script"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}