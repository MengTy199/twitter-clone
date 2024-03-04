/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },

    extend: {
      animation: {
        "spin-fast": "spin 0.7s linear infinite",
      },
      fontSize:{
        sm: "13px",
        ls: "11px"
      },
      width: {
        50: "50px",
        100: "100px",
        150: "150px",
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        400: "400px",
        450: "450px",
        600: "600px",
        500: "500px",
        1200: "1200px",
        68: "68px",
        88: "88px",
        275: "275px",
        290: "290px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
