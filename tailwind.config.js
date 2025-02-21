/** @type {import('tailwindcss').Config} */

// import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prLavender: "#7456FF",
        prBlack: "#0C0C0C",
        srBlack: "#0F0F0F",
        trBlack: "#131313",
        prGrey: "#707070",
        srGrey: "#999999",
        cvHover: "#5739E1",
        bgSocmed: "#161225",
        slGrey: "#111112",
        slcontainer: "#1B172A",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
