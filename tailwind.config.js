/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "rgb(255 255 255 / 0.125)",
      },

      fontFamily: {
        "Roobert-Pro": ["Roobert Pro", "sans-serif"],
      },
    },

    screens: {
      xl: "768px",
      lg: "640px",
      md: "425px",
      sm: "375px",
      xs: "320px",
    },
  },
  plugins: [],
};
