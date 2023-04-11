import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Stack } from '@mui/material';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Stack minHeight="100vh" direction="column">
      <Navbar />
      <Container pb={5} overflow="hidden">
        {children}
      </Container>
      <Footer mt="auto" />
    </Stack>
  );
};
