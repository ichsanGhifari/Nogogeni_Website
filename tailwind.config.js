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
        'bgherosecond': "url('/src/images/home/bgmerah.png')",
        'bgTeam':"url('/src/images/about/BackgroundTeam.png')",
        'bgPartner':"url('/src/images/partner/bgpartner.png')",
        'bgGallery' : "url('/src/images/gallery/bgGallery.png')",
        'bgContact' : "url('/src/images/contact/bgcontact.png')",
        'bgStaff' : "url('/src/images/Staff/bgStaff.png')",
        'bgTest' : "url('/src/images/about/testimonial/bgTestimonial.png')",

      }),
      translate: {
        'spe': '0.2rem',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
       },
       screens: {
        'samsung': '370px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};
