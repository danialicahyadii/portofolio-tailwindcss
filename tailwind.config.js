/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#F4CE14',
        secondary: '#379777',
        dark: '#45474B'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

