import { getPageBySlug } from '@/services/cms/get-page-by-slug';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export { default as default } from '../page';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data } = await getPageBySlug(params.slug);

  if (!data) notFound();

  return {
    title: `Regelregister van de Nederlandse Overheid - ${data.attributes.name}`,
  };
}
