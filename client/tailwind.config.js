module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#e50914',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
