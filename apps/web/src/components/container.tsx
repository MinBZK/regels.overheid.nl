import { Box, BoxProps } from '@mui/material';

type Props = React.PropsWithChildren & Omit<BoxProps, 'display' | 'gridTemplateColumns' | 'sx'>;

export const Container: React.FC<Props> = ({ children, ...rest }) => (
  <Box
    display="grid"
    gridTemplateColumns={['1fr', '1fr repeat(5, 1fr) 1fr']}
    sx={{
      '& > * ': {
        gridColumn: '2 / 8',
      },
    }}
    {...rest}
  >
    {children}
  </Box>
);
