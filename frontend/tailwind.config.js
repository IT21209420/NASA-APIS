/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        dominant: "#cde2e8",
        secondary: "#30a1e9",
        accent: "#e52d81",
      },
      backgroundImage: {
        "custom-bg": "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
