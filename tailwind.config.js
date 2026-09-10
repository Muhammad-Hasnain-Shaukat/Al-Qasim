/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F5F1E8',
          300: '#EDE6DA',
          400: '#DFD5C4',
          500: '#D1C2AC',
          DEFAULT: '#FAF8F3',
        },
        charcoal: {
          50: '#F4F4F3',
          100: '#E4E3E0',
          200: '#C2BFBA',
          300: '#9B968F',
          400: '#645F57',
          500: '#433F39',
          600: '#322E29',
          700: '#25221E',
          800: '#1C1A17',
          900: '#141210',
          DEFAULT: '#1C1A17',
        },
        sandstone: {
          50: '#F9F8F6',
          100: '#F3F0EB',
          200: '#E7E2D6',
          300: '#DBD3C2',
          400: '#C6B9A1',
          500: '#AD9C80',
          DEFAULT: '#E7E2D6',
        },
        taupe: {
          50: '#F7F6F5',
          100: '#EBE9E6',
          200: '#D8D4CE',
          300: '#BCB6AC',
          400: '#9C9588',
          500: '#7E7668',
          DEFAULT: '#9C9588',
        },
        brass: {
          100: '#F2EBDC',
          200: '#E3D4B6',
          300: '#D2BB8C',
          400: '#C1A265',
          500: '#B08B42',
          600: '#947231',
          700: '#745722',
          DEFAULT: '#B08B42',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(28, 26, 23, 0.05)',
        'elevated': '0 12px 30px -4px rgba(28, 26, 23, 0.08)',
        'drawer': '0 0 50px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
