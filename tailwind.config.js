/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        kucing: 'url("../public/image/foto.jpeg")',
        foto: 'url("../public/image/IMG_20231225_201305.jpg")',
      },
      fontFamily:{
        georama:'Georama',
        PlayfairDisplay:'Playfair Display'
      }
    },
  },
  plugins: [],
 
}

