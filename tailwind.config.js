/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        kucing: 'url("../public/image/foto.jpeg")',
        kucing: 'url("../public/image/foto.jpeg")',
      },
      fontFamily:{
        georama:'Georama',
        PlayfairDisplay:'Playfair Display'
      }
    },
  },
  plugins: [],
 
}

