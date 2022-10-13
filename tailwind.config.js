/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },

    extend: {
      fontFamily: {
        quentin: ["Quentin", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        squarepeg: ["Square Peg", "cursive"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        pridi: ["Pridi", "serif"],
        teko: ["Teko", "sans-serif"],
      },
      colors: {
        primary: "#393E50",
        secondary: "#5C5C5C",
        accent: "#D41B4B",
        tertiary: "#747474",
      },
    },
  },
  plugins: [],
}