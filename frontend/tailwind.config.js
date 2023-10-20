/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0A225",
      },
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      josefin: ["Josefin Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
