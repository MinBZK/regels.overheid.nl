import { TypographyOptions } from '@mui/material/styles/createTypography';
import local from '@next/font/local';

const localFont = local({
  src: [
    { path: '../theme/font/ROsanswebtextregular.woff', weight: 'normal' },
    { path: '../theme/font/ROsanswebtextitalic.woff', weight: 'normal', style: 'italic' },
    { path: '../theme/font/ROsanswebtextbold.woff', weight: 'bold' },
  ],
  fallback: ['Arial', 'Veranda', 'Times New Roman'],
});

export const typography: TypographyOptions = {
  fontSize: 16,
  fontFamily: localFont.style.fontFamily,
};
