/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dogica: ["Dogica"],
      depixel: ["DePixel"],
    },

    extend: {
      colors: {
        light: "",
        dark: "",
        accent: {
          DEFAULT: "",
          dark: "",
          light: "",
        },
        background: "var(--background)",
        text: "var(--text)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
};
