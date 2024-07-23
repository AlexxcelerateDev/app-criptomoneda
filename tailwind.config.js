const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  daisyui: {
    themes: ['night'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animated'),
    require('daisyui'),
    addDynamicIconSelectors(),
  ],
};
