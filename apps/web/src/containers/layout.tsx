import { Stack } from '@mui/material';
import { Container } from '../components/container';
import { Navbar } from '../components/navbar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Stack>
      <Navbar />
      <Container>{children}</Container>
    </Stack>
  );
};
