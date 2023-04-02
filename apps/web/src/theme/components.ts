import { ThemeOptions } from '@mui/material';
import { MuiAlert } from './components/mui-alert';
import { MuiButton } from './components/mui-button';
import * as MuiCard from './components/mui-card';
import { MuiChip } from './components/mui-chip';

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
  MuiChip,
  MuiAlert,
  MuiButton,
  ...MuiCard,
};
