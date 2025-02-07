/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dogica: ["Dogica"],
      depixel: ["DePixel"],
      roboto: ["Roboto"],
    },

    extend: {
      colors: {
        accent: {
          DEFAULT: "#CB6192",
          dark: "#932B5C",
          light: "#D7B9C0",
        },
        body: "var(--body)",
        primary: "var(--primary)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
};
