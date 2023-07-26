import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { getMethods } from '@/prisma/get-methods';
import { Metadata } from 'next';
import { MethodsPage } from './methods-page';

export default async function MethodenPage() {
  const methods = await getMethods();

  return (
    <>
      <Container className="mb-16">
        <Typography variant="h1">Methoden</Typography>
        <RemotePage page="methoden" />
      </Container>
      <MethodsPage methods={methods} />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Methoden',
};
