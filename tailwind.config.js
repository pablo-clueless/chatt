/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {},
      backgroundImage: {},
      colors: {
        green: {
          100: '#3CB043',
          200: '#359C3B',
          300: '#2E8834',
          400: '#28752C',
          500: '#216125',
          600: '#1A4E1D',
          700: '#143A16',
          800: '#0D270E',
          900: '#061307',
        }
      },
      keyframes: {},
    },
  },
  plugins: [],
}

