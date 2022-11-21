/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#06283d",
        "light-blue": "#D6F4FE",
      },
    },
  },
  plugins: [require("daisyui")],
};
