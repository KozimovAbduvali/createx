/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: 'Ubuntu',
      },
      colors: {
        primary: '#FF5A30'
      }
    },
  },
  plugins: [],
}