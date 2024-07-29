/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
    fontFamily: {
      'DM': ['DM Sans'],
      'Poppins': ['Poppins'],
      'Inter': ['Inter'],
    },
    maxWidth: {
      '8xl': '1440px',
      'ss': '280px'
    },
    width: {
      '1/10':'10%',
      '4.5': '18px'
    },
    height: {
      '4.5': '18px'
    },
    colors: {
      'cyanblue': '#72D1F4',
      'darkcyanblue': '#5DC4F0',
      'space-cyanblue': '#E0F5FD',
      'gray': '#667085',
      'space-gray': '#E4E4E4',
      'spaced-gray': '#F6F7F9',
      'dark-gray': '#D9D9D9',
      'orange': '#E9635E',
      'red': '#FF0000',
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

