/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        bebas :  "'Bebas Neue', sans-serif",
        montserrat : "'Montserrat', sans-serif",
        roboto : "'Roboto', sans-serif",
         
      },
      backgroundImage : {
        'backgroud' : "url('https://i.ibb.co/q11wYY8/banner.webp')" ,
        'footerBackgroud' : "url('https://i.ibb.co/zSq7m96/footer-shape2.png')"

        
        
      }
    },
  },
  plugins: [require("daisyui")],
}

// https://i.ibb.co/bWm0p3t/footer-shape1.png
// https://i.ibb.co/zSq7m96/footer-shape2.png