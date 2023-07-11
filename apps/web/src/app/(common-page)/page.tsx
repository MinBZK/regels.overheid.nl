import { Container } from '@/components/container';
import { RemoteMdx } from '@/components/remote-mdx';
import { getPageBySlug } from '@/prisma/get-page-by-slug';
import { Metadata } from 'next';

export const revalidate = 3600;

export default async function Home() {
  const page = await getPageBySlug('home');

  return (
    <Container component="main">
      <RemoteMdx content={page?.content || ''} />
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid',
};
