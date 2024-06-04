/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(26, 188, 156)",
        sec: "rgb(44, 62, 80)",
        accent: "#1abc9c",
      },
    },
  },
  plugins: [],
};
