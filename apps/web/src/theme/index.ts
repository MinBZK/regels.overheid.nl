import { createTheme } from '@mui/material/styles';
import { components } from './components';
import { palette } from './palette';

export interface MakeThemeArgs {
  fontFamily: string;
}

export const makeTheme = ({ fontFamily }: MakeThemeArgs) =>
  createTheme({
    palette,
    components,
    typography: { fontFamily },
  });
