/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#01A696',
        'letter-green':'#33A696',
        'clear-aquamarina': '#e6fefc',
    },
    },
  },
  plugins: [],
}

