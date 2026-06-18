import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { getPageBySlug } from '@/services/cms/get-page-by-slug';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  return (
    <Container component="main">
      <RemotePage page={slug} />
    </Container>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) return notFound();

  return {
    title: `Regelregister van de Nederlandse Overheid - ${page.name}`,
  };
}
