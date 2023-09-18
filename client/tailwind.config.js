/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      main:"#1E7C83",
      second:"#DFECED"
    },
    extend: {
      width: {
        '128': '32rem',
      },
      colors: {
        'secondary': '#DF665',
      },
    },
  },
  plugins: [],
}

