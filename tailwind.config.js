/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#050d1a',
          800: '#070f1f',
          700: '#0a1628',
          600: '#0d1f38',
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
