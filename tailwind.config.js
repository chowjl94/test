module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'wood': "url('../src/logo.png')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
