const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Montserrat',sans-serif"],
      },
      colors: {
        // 500 for gradient, 600 for hover
        primary: { DEFAULT: '#8000FF', 500: '#7E26A8', 600: '#4f009e' },
        //400 to 600 gradient
        secondary: { DEFAULT: '#F6521E', 500: '#F44E61', 600: '#F7521E' },
        title: '#595959',
        secondHover: '#b32a00',
      },
      backgroundImage: theme => ({
        'bghero': "url('/src/images/bgitem.png')",
        'bgherosecond': "url('/src/images/home/bgmerah.png')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
