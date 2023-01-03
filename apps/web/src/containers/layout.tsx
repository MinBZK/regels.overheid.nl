import { Stack } from '@mui/material';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Stack minHeight="100vh" direction="column">
      <Navbar />
      <Container pb={5}>{children}</Container>
      <Footer mt="auto" />
    </Stack>
  );
};
