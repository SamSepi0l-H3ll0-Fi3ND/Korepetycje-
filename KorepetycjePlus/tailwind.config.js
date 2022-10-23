/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#06283d",
      },
    },
  },
  plugins: [require("daisyui")],
};
