import { Components } from '@mui/material';
import { alpha, Theme } from '@mui/system';

export const MuiCard: Components<Theme>['MuiCard'] = {
  styleOverrides: {
    root: {
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
    },
  },
};

export const MuiCardContent: Components<Theme>['MuiCardContent'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3),
      borderRadius: theme.spacing(1),
    }),
  },
};

export const MuiCardActions: Components<Theme>['MuiCardActions'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginTop: theme.spacing(3),
      padding: `${theme.spacing(2)} 0 0 0`,
      borderTop: `1px solid ${alpha(theme.palette.grey[100], 0.2)}`,
    }),
  },
};

export const MuiCardMedia: Components<Theme>['MuiCardMedia'] = {
  styleOverrides: {
    root: ({ theme }) => ({}),
  },
};
