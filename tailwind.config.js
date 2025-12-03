/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind where to find class names
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",   // safe if you ever switch to App Router
  ],

  theme: {
    extend: {
      colors: {
        gold: "#d4af37",       // BetMGM gold
        black: "#000000",      // primary background
        white: "#ffffff",      // text color
        panel: "#0f0f0f",      // dark gray panels
        neutral: {
          700: "#3d3d3d",
          800: "#2a2a2a",
          900: "#1a1a1a",
        },
      },

      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.12)",   // soft card shadow
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },

  plugins: [],
};
