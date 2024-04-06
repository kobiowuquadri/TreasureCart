/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(/src/Components/NewArrival/NAimage/Bitmap.png)",
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif']
      },
      colors:{
        'primary': '#FFC700',
        'secondary': '#2B2835',
        'desc': '#030303',
        'price': '#9D8220',
        'bck': '#F8F8F9'
      },
    },
  },
  plugins: [],
}

