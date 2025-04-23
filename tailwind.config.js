/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dogica: ["Dogica"],
      depixel: ["DePixel"],
      roboto: ["Roboto"],
      kirang: ["Kirang"],
    },

    extend: {
      colors: {
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
          light: "var(--accent-light)",
        },
        body: "var(--body)",
        primary: "var(--primary)",
        "primary-50": "var(--primary-50)",
        card: "var(--card)",

        dark: "#18110C",
      },
    },
  },
  plugins: [],
};
