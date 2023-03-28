import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import { themeConfig } from '../src/theme';

const { typography, ...themeConfigWithoutTypography } = themeConfig;
const { fontFamily, ...typographyWithoutFontFamily } = typography;

import 'rijksoverheid-fonts/sans';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#fff' }],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = createTheme({
  ...themeConfigWithoutTypography,
  typography: {
    ...typographyWithoutFontFamily,
    fontFamily: `Rijksoverheid Sans Web Text`,
  },
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
