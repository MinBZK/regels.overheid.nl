import { Box } from '@mui/material';
import { Navbar } from '../components/navbar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      rowGap={2}
      display="grid"
      gridTemplateRows="64px auto"
      gridTemplateColumns="repeat(5, 1fr)"
      gridTemplateAreas="'nav nav nav nav nav' 'left main main main right'"
    >
      <Box gridArea="nav">
        <Navbar />
      </Box>
      <Box gridArea="main">{children}</Box>
    </Box>
  );
};
