/** @type {import('tailwindcss').Config} */
import {fontFamily} from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    "./index.html",      // Inclure le fichier HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Inclure tous les fichiers JS/TS/React
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: '#2dfe65', dark: '#0a7b26'
        }, p: {
          black: '#111111', white: '#ffffff', gray: '#c3c3c3', darkgray: '#757575',
        }
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', ...fontFamily.sans],
        leckerli: ['Leckerli One', 'cursive'],
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


