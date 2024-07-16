/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
    fontFamily: {
      'DM': ['DM Sans'],
      'Poppins': ['Poppins']
    },
    maxWidth: {
      '8xl': '1440px'
    },
    width: {
      '1/10':'10%'
    },
    colors: {
      'cyanblue': '#72D1F4',
      'darkcyanblue': '#5DC4F0',
      'space-cyanblue': '#E0F5FD',
      'gray': '#667085',
      'space-gray': '#E4E4E4',
      'spaced-gray': '#F6F7F9',
      'orange': '#E9635E',
      'green': '#7AD979',
    },
    padding: {
      '0.5': '2px'
    },
    borderRadius: {
      '1/2': '50%'
    }
    },
  },
  plugins: [],
}

