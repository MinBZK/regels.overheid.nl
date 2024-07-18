import { getPageBySlug } from '@/services/cms/get-page-by-slug';
import { Metadata } from 'next';

export function defaultMetaData(slug: string) {
  return async (): Promise<Metadata> => {
    const page = await getPageBySlug(slug);

    if (!page)
      return {
        title: 'Regelregister van de Nederlandse Overheid',
      };

    const name = page.name?.split('/').at(-1);

    return {
      title: `Regelregister van de Nederlandse Overheid - ${name}`,
    };
  };
}
