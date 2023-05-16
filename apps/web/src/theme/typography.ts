import { TypographyOptions } from '@mui/material/styles/createTypography';
import local from "next/font/local";

const localFont = local({
  src: [
    { path: '../../public/font/ROsanswebtextregular.woff', weight: 'normal' },
    { path: '../../public/font/ROsanswebtextitalic.woff', weight: 'normal', style: 'italic' },
    { path: '../../public/font/ROsanswebtextbold.woff', weight: 'bold' },
  ],
  fallback: ['Arial', 'Veranda', 'Times New Roman'],
});

export const typography: TypographyOptions = {
  fontSize: 16,
  fontFamily: localFont.style.fontFamily,
};
