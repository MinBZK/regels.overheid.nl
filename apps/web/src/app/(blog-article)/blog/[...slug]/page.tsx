import { Button } from '@/components/button';
import { CmsImage } from '@/components/cms-image';
import { Container } from '@/components/container';
import { Typography } from '@/components/typography';
import { getBlogArticle } from '@/services/cms/get-blog-article';
import { IconArrowLeft } from '@tabler/icons-react';
import { Metadata } from 'next';
import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogArticlePage(props: Props) {
  const articleResponse = await getBlogArticle({ args: { id: Number(props.params.slug[0]) } });

  return (
    <Container>
      <Button component={Link} variant="text" startIcon={<IconArrowLeft />} href="/blog">
        Overzicht
      </Button>
      <Typography variant="page-title" className="mb-12 mt-4 ">
        {articleResponse.data.attributes.title}
      </Typography>
      <span className="text-grey-light">Publicatiedatum 28-04-2023, 14:40</span>
      <figure className="aspect-[308/140] relative rounded-lg overflow-hidden mb-12 mt-3">
        {articleResponse.data.attributes.cover.data.attributes.formats.small && (
          <CmsImage
            fill
            className="object-cover"
            src={articleResponse.data.attributes.cover.data.attributes.formats.small.url}
            alt={
              articleResponse.data.attributes.cover.data.attributes.alternativeText ||
              articleResponse.data.attributes.title
            }
          />
        )}
      </figure>
      <div className="prose">{articleResponse.data.attributes.content}</div>
      <div className="py-6 border-t border-b border-grey-light mt-6">
        Categorie: {articleResponse.data.attributes.category}
      </div>
    </Container>
  );
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const [id] = params.slug;
  const articleResponse = await getBlogArticle({ args: { id: Number(id) } });

  return {
    title: `${articleResponse.data.attributes.title} - Blog - regels.overheid.nl`,
  };
}
