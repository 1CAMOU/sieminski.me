const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'primary': '#5EDFFB',
        'secondary': '#05010D'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },

  plugins: [],
};

module.exports = config;
