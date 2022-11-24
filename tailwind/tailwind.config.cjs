/* eslint-disable comma-dangle */
/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: '#F66F4D',
      'gray-dark': '#2D3134',
      'gray-light': '#5B5F62',
      'white-dark': '#FAF8ED',
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      pop: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
