/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      colors:{
        'red-base': '#E02D2D',
        'black-base': '#191919',
      }
    },

  },
  plugins: [],
}

