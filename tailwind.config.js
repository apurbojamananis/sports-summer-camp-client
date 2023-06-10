/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      hover: ["responsive"],
      fontFamily: {
        primary: ["Playfair Display", "sans-serif"],
        secondary: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};