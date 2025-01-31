/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Fraunces", "serif"],
    },

    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
};
