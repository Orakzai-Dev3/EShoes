// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm400': { 'min': '400px', 'max': '639px' },
      },
      colors: {
        mycolor: "rgba(0,0,0,0.54)",
      },
      fontFamily: {
        cinzel: ["Cinzel", ...fontFamily.serif],
        inter: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
