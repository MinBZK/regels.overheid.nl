import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { getPageBySlug } from '@/prisma/get-page-by-slug';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default function SlugPage({ params }: Props) {
  return (
    <Container component="main">
      <RemotePage page={params.slug} />
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
