module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },

      colors: {
        primary: {
          DEFAULT: '#2f2d51',
          light: '#3f3e6d',
        },

        secondary: '#211f41',
        orange: '#FE6737',
      },

      fontFamily: {
        base: 'Poppins, sans-serif',
      },

      fontSize: {
        '2xs': '.65rem',
      },

      height: {
        30: '8rem',
        104: '32rem',
        '80-screen': '80vh',
      },

      boxShadow: {
        'orange-active': '0px 13px 26px 0px #FE6737',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
