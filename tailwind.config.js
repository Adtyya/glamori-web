/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "./app/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        glamorig: {
          900: "#6C4503",
          800: "#835806",
          700: "#A3720A",
          600: "#C38E0E",
          500: "#E3AC14",
          400: "#EEC74B",
          300: "#F6DA6F",
          200: "#FCEBA0",
          100: "#FDF6CF",
        },
        glamoris: {
          900: "#2B3A4B",
          800: "#394452",
          700: "#545D69",
          600: "#6D7580",
          500: "#858C94",
          400: "#A5ABB3",
          300: "#DADEE3",
          200: "#EBEEF2",
          100: "#F4F6F9",
        },
      },
    },
  },
  plugins: [],
};
