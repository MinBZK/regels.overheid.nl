import { Box, BoxProps, useTheme } from '@mui/material';

type Props = React.PropsWithChildren & Omit<BoxProps, 'display' | 'gridTemplateColumns' | 'sx'>;

export const Container: React.FC<Props> = ({ children, ...rest }) => {
  const { spacing } = useTheme();

  return (
    <Box
      py={3}
      display="grid"
      gridTemplateColumns={[
        `${spacing(3)} 1fr ${spacing(3)}`,
        `${spacing(9)} 1fr ${spacing(9)}`,
        `${spacing(18)} 1fr ${spacing(18)}`,
      ]}
      sx={{
        '& > * ': {
          gridColumn: '2 / 3',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
