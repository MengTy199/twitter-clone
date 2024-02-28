/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
    
      width: {
        50: "50px",
        150:'150px',
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        450: "450px",
        600: "600px",
        500: "500px",
        1200: "1200px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
