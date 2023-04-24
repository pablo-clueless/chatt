/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        shake: 'shake 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'about': 'url("./src/assets/images/about.jpg")',
        'home': 'url("./src/assets/images/home.jpg")',
        'not-found': 'url("./src/assets/images/404.png")',
      },
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
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(-8px)'},
          '25%': { transform: 'translateX(8px)'},
          '50%': { transform: 'translateX(-8px)'},
          '75%': { transform: 'translateX(8px)'},
          '100%': { transform: 'translateX(0px)'},
        }
      },
    },
  },
  plugins: [],
}

