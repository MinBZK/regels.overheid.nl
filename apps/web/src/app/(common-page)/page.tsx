import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Metadata } from 'next';

export default async function Home() {
  return (
    <Container component="main">
      <RemotePage page="home" />
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid',
};
