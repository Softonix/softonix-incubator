/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      gray: '#6b7280',
      'yellow-light': '#FAF8ED',
      'orng-true': '#F66F4D',
      'title-color': '#2D3134',
      'description-color': '#5B5F62',
      'white-color': '#FFFFFF'
    },
    fontFamily: {
      poppins: ['Poppins'],
      sen: ['Sen'],
      inter: ['inter']
    },
    container: {
      screens: {
        desktop: '1210px'
      },
      padding: '20px'
    },
    extend: {}
  },
  plugins: []
}
