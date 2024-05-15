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
        "home": "url(/src/Components/HeroSection/backgroundddd.png)",
        "responsive": "url(/src/Components/HeroSection/resp.png)"
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif']
      },
      colors:{
        'primary': '#FF9017',
        'primary2': '#FFC700',
        'secondary': '#2B2835',
        'desc': '#030303',
        'price': '#9D8220',
        'bck': '#F8F8F9',
        'border': '#E0E0E0',
        'ptext': '#545454',
        'review': '#969696',
        'orders': '#00B517',
        'model': '#f1eded'
      },
    },
  },
  plugins: [],
}

