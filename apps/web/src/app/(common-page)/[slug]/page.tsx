import { Container } from '@/components/container';
import { RemoteMdx } from '@/components/remote-mdx';
import { getPageBySlug } from '@/prisma/get-page-by-slug';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function SlugPage({ params }: Props) {
  const page = await getPageBySlug(params.slug);

  return (
    <Container component="main">
      <RemoteMdx content={page!.content || ''} />
    </Container>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);

  if (!page) return notFound();

  return {
    title: `Regelregister van de Nederlandse Overheid - ${page.name}`,
  };
}
