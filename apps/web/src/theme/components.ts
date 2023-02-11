import { darken, lighten, ThemeOptions } from '@mui/material';
import { MuiAlert } from './components/mui-alert';

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
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: 16,
        minHeight: 44,
        borderRadius: 0,
        padding: '0 16px',
        boxShadow: 'none',
        textTransform: 'none',
        ':hover, :active': {
          boxShadow: 'none',
          backgroundColor: darken(theme.palette.primary.main, 0.3),
        },
        ':focus, :active': {
          boxShadow: 'none',

          ':after': {
            left: '-5px',
            top: '-5px',
            content: '""',
            position: 'absolute',
            width: 'calc(100% + 10px)',
            height: 'calc(100% + 10px)',
            border: '1px dashed black',
          },
        },
      }),
      outlined: () => ({
        borderWidth: 3,
        ':hover': {
          borderWidth: 3,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },
      }),
      text: ({ theme }) => ({
        textTransform: 'capitalize',
        ':hover': {
          backgroundColor: lighten(theme.palette.primary.main, 0.7),
        },
      }),
    },
  },
  MuiAlert,
};
