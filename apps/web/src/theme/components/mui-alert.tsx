import { Components } from '@mui/material';
import { Theme } from '@mui/system';
import { AlertTriangleIcon } from '../icons/alert-triangle-icon';
import { CheckCircleIcon } from '../icons/check-circle-icon';
import { InfoCircleIcon } from '../icons/info-circle-icon';
import { WarningCircleIcon } from '../icons/warning-circle-icon';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.common.black,
      borderRadius: 0,
      border: '1px solid',
      padding: theme.spacing(3),
      alignItems: 'flex-start',
      '& .MuiAlertTitle-root': {
        margin: 0,
        fontSize: 20,
        fontWeight: 700,
        lineHeight: '150%',
      },
      '& .MuiAlert-message': {
        padding: 0,
      },
      '& .MuiAlert-icon': {
        padding: 0,
        fontSize: 20,
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(0.5),
      },
    }),
    standardInfo: ({ theme }) => ({
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.lighter,
      '& .MuiAlert-icon': {
        color: theme.palette.primary.dark,
      },
    }),
    standardSuccess: ({ theme }) => ({
      borderColor: theme.palette.success.light,
      backgroundColor: theme.palette.success.lighter,
      '& .MuiAlert-icon': {
        color: theme.palette.success.dark,
      },
    }),
    standardWarning: ({ theme }) => ({
      borderColor: theme.palette.warning.light,
      backgroundColor: theme.palette.warning.lighter,
      '& .MuiAlert-icon': {
        color: theme.palette.warning.dark,
      },
    }),
    standardError: ({ theme }) => ({
      borderColor: theme.palette.error.light,
      backgroundColor: theme.palette.error.lighter,
      '& .MuiAlert-icon': {
        color: theme.palette.error.dark,
      },
    }),
  },
  defaultProps: {
    iconMapping: {
      info: <InfoCircleIcon fontSize="inherit" />,
      success: <CheckCircleIcon fontSize="inherit" />,
      warning: <AlertTriangleIcon fontSize="inherit" />,
      error: <WarningCircleIcon fontSize="inherit" />,
    },
  },
};
