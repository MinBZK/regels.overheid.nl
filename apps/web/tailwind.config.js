/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
      '2xl': '1768px',
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'Arial', 'Veranda', 'Times New Roman'],
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
        primary: {
          dark: '#154270',
          main: '#007BC0',
          light: '#B2D7EA',
          lighter: '#E5F1F9',
        },
        warning: {
          dark: '#E17000',
          main: '#E78D33',
          light: '#EDA966',
          lighter: '#FCF0E5',
        },
        error: {
          dark: '#C70039',
          main: '#D23361',
          light: '#E06694',
          lighter: '#F9E6EB',
        },
        success: {
          dark: '#00855F',
          main: '#339D7F',
          light: '#66B69F',
          lighter: '#E6F3EF',
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
  plugins: [],
};
