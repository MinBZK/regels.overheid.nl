/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black: '#212427',
        grey: {
          dark: '#4D5052',
          main: '#7A7C7D',
          light: '#CECECE',
          lighter: '#EFEFEF',
        },
        black: '#212427',
        primary: {
          dark: '#154270',
          main: '#007BC0',
          light: '#B2D7EA',
          lighter: '#E5F1F9',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': '1180px',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
