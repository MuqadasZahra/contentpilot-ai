/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f5ff",
          100: "#e6ebff",
          400: "#7c8bff",
          500: "#5a67f2",
          600: "#4650d6",
          700: "#3740ab",
        },
      },
    },
  },
  plugins: [],
};
