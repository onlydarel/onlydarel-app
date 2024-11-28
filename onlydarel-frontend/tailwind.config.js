/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70-30': '70% 28%',
      },
      colors: {
        "bgBlue": "#0A2647",
        "secondaryBlue":"#144272",
        "primary": "#FC4100",
        "secondary": "#FFC55A",
      },
    },
  },
  plugins: [],
}