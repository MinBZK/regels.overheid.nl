import { Typography, TypographyProps } from '@mui/material';

export const PageTitle: React.FC<TypographyProps<'h1'>> = ({ children, ...props }) => (
  <Typography component="h1" fontSize={36} fontWeight="bold" mb={6} {...props}>
    {children}
  </Typography>
);
