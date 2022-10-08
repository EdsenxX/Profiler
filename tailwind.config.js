/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#006060",
        'secondary-100': '#007878',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        title: ['Satisfy', 'cursive'],
      }
    },
  },
  plugins: [],
}
