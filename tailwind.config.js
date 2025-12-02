/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        panel: "#1a1a1a",
        gold: "#d4af37"
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.45)"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
};
