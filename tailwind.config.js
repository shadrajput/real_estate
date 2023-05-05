/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xxs: "220px",
      xs: "330px",
      ...defaultTheme.screens,
    },
    fontFamily : {
      roboto: "'Roboto',",
      cursu: "'Dancing Script', 'cursive'",
      popins: "'Poppins',"
    },
  },
  plugins: [],
}