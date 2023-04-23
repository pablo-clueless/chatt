/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {},
      backgroundImage: {},
      colors: {
        green: {
          50: '#92D396',
          100: '#7DCA81',
          200: '#67C16C',
          300: '#51B857',
          400: '#3CB043',
          500: '#359C3B',
          600: '#2E8834',
          700: '#28752C',
          800: '#216125',
          900: '#1A4E1D',
        }
      },
      keyframes: {},
    },
  },
  plugins: [],
}

