import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    lighter?: string;
  }

  interface PaletteColor {
    lighter: string;
  }
}
