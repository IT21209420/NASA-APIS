/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   mono: ["mono", "sans-serif"],
      // },
      colors: {
        dominant: "#fc3c24",
        secondary: "#0a3c91",
        accent: "#e52d81",
        pink: "#ba1e68",
      },
      backgroundImage: {
        "custom-bg": "url('/src/assets/9742330.jpg')",
      },
    },
  },
  plugins: [],
};
