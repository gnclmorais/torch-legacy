module.exports = {
  purge: ['./src/**/*.{html,hbs}', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '1000': 1000,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
