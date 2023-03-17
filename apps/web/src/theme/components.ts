import { ThemeOptions } from '@mui/material';
import { MuiAlert } from './components/mui-alert';
import { MuiButton } from './components/mui-button';

export const components: ThemeOptions['components'] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        height: '70px',
        boxShadow: 'none',
      },
    },
  },
  MuiLink: {
    styleOverrides: {},
  },
  MuiAlert,
  MuiButton,
};
