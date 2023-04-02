import { Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontsize: 16,
      display: 'flex',
      boxShadow: 'none',
      fontWeight: 'bold',
      alignItems: 'center',
      textTransform: 'none',
      height: theme.spacing(5),
      borderRadius: theme.spacing(1),
      padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
      ':hover': {
        color: theme.palette.primary.dark,
        boxShadow: 'none',
      },
    }),
    contained: ({ theme }) => ({
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      ':hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
      },
      ':focus, :active': {
        outline: `2px solid ${theme.palette.common.black}`,
        backgroundColor: theme.palette.primary.dark,
      },
      ':disabled': {
        color: theme.palette.common.black,
        backgroundColor: theme.palette.grey[400],
      },
    }),
    containedSecondary: ({ theme }) => ({
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.light,
      ':hover': {
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      ':focus, :active': {
        backgroundColor: theme.palette.primary.light,
        outline: `2px solid ${theme.palette.common.black}`,
      },
    }),
    outlinedPrimary: ({ theme }) => ({
      borderColor: theme.palette.primary.main,
      ':hover': {
        backgroundColor: 'transparent',
        borderColor: theme.palette.primary.dark,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      ':focus, :active': {
        textDecoration: 'underline',
      },
    }),
    textPrimary: () => ({
      ':hover': {
        backgroundColor: 'transparent',
      },
      ':focus, :active': {
        textDecoration: 'underline',
        backgroundColor: 'transparent',
      },
    }),
  },
};
