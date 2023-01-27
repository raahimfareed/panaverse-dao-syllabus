const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{css,scss}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BBDED6",
        "primary-dark": "#8EC0B5",
        secondary: "#E6EFED",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
