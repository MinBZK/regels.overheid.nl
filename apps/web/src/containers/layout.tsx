import { Box } from '@mui/material';
import { Navbar } from '../components/navbar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box py={9} display="grid" gridTemplateColumns="1fr [main-start] repeat(5, 1fr) [main-end] 1fr">
        <Box gridArea="main">{children}</Box>
      </Box>
    </>
  );
};
