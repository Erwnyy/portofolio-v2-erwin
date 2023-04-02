/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    display: ["group-hover"],
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'min': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'min': '821px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '820px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      "gray-background": ' #F7FAFC',
      "dark-1": "#62605D",
      "dark-2": "#3B3A38",
      "blue-website": "#26A8E0",
      "blue-lite": "#2D368E",
      "blue-fit": "#E1EEFF",
      "light-gray": "#EDF2F7",
      ...colors
    },
    keyframes: {
      wave: {
        '100%': { transform: 'translateY(10px)' }
      },
      fade: {
        
      }
    },
    animation: {
      'waving-hand': 'wave 2s infinite ease alternate',
    },
  },

  plugins: [],
}
