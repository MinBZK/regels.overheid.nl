import { Components, Theme } from '@mui/material';

export const MuiChip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: 25,
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius: theme.spacing(0.5),
    }),
    label: ({ theme }) => ({
      padding: `0 ${theme.spacing(1)}`,
    }),
    colorInfo: ({ theme }) => ({
      color: theme.palette.info.dark,
      backgroundColor: theme.palette.info.light,
    }),
  },
};
