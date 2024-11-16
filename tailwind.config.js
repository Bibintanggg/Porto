/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        faculty: ["Faculty Glyphic", "sans-serif"],
        source: ["Source Code Pro", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        scroll: "scroll 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};