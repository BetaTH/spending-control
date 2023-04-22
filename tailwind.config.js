/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const plugin = require('tailwindcss/plugin')
const { colors, register, typographies } = require('./src/theme/theme')

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...typographies,
    extend: {
      colors,
    },
  },
  plugins: [plugin(register)],
}
