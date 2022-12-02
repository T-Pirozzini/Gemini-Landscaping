/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'vanIsle' : './public/assets/images/vanIsle.jpg'
      },
    },
  },
  plugins: [],
}
