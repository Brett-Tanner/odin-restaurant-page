/** @type {import('tailwindcss').config} */
module.exports = {
  content: ["./src/*.ts", "./dist/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Cinzel", "serif"],
      body: ["Rouge Script", "cursive"],
    },
    gridTemplateRows: {
      layout: "100px, 1fr",
    },
  },
  plugins: [],
};
