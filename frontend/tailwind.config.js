/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0A225",
      },
      boxShadow: {
        "3xl": "20px 20px 40px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
