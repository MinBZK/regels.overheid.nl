/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        black: '#212427',
        grey: {
          dark: '#4D5052',
          main: '#7A7C7D',
          light: '#CECECE',
          lighter: '#EFEFEF',
        },
        primary: {
          dark: '#154270',
          main: '#007BC0',
          light: '#B2D7EA',
          lighter: '#E5F1F9',
        },
      },
    },
  },
  plugins: [],
};
