/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        padangRed: '#CC0000',
        padangYellow: '#FFCC00',
      }
    },
  },
  plugins: [],
}
