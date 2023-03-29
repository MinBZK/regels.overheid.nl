import { Box, BoxProps, useTheme } from '@mui/material';

type Props = React.PropsWithChildren & Omit<BoxProps, 'display' | 'gridTemplateColumns'>;

export const Container: React.FC<Props> = ({ children, sx, ...rest }) => {
  const { spacing } = useTheme();

  return (
    <Box
      py={3}
      display="grid"
      gridTemplateColumns={[
        `${spacing(3)} 1fr ${spacing(3)}`,
        `${spacing(9)} minmax(auto, 624px) ${spacing(9)}`,
        `${spacing(12)} minmax(auto, 832px) ${spacing(12)}`,
        `${spacing(18)} minmax(auto, 992px) ${spacing(18)}`,
        `${spacing(18)} minmax(auto, 1152px) ${spacing(18)}`,
      ]}
      sx={{
        ...sx,
        '& > * ': {
          gridColumn: '2 / 3',
        },
      }}
      justifyContent="center"
      {...rest}
    >
      {children}
    </Box>
  );
};
