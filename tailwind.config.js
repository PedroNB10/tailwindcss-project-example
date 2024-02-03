/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        'red-base': '#E02D2D',
        'black-base': '#191919',
      }
      
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      'darth-vader': "url('/src/assets/img/Darth-IMG.png')",
 
    }

  },
  plugins: [],
}

