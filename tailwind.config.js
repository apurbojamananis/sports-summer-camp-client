/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      hover: ["responsive"],
      fontFamily: {
        primary: ["Oswald", "sans-serif"],
        secondary: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
