import { createTheme } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  palette,
  components,
  typography,
  breakpoints,
});
