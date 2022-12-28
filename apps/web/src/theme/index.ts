import { createTheme } from '@mui/material/styles';

export interface MakeThemeArgs {
  fontFamily: string;
}

export const makeTheme = ({ fontFamily }: MakeThemeArgs) =>
  createTheme({
    typography: { fontFamily },
  });
