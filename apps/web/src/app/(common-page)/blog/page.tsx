import { Container } from '@/components/container';
import { getBlogArticles } from '@/services/cms/get-blog-articles';
import { BlogArticleCard } from './article-card';
import { Typography } from '@/components/typography';
import slugify from '@sindresorhus/slugify';
import { Metadata } from 'next';

export default async function BlogPage() {
  const blogArticlesResponse = await getBlogArticles();

  const cmsRootUrl = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_ROOT_URL;

  return (
    <>
      <Container>
        <Typography variant="page-title">Blog</Typography>
      </Container>
      <Container bleed>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          {blogArticlesResponse.data.map(({ id, attributes }) => (
            <BlogArticleCard
              key={id}
              title={attributes.title}
              category={attributes.category}
              url={`/blog/${id}/${slugify(attributes.title)}`}
              coverAlt={attributes.cover.data.attributes.alternativeText}
              date={new Date(attributes.updatedAt || attributes.publishedAt)}
              cover={`${cmsRootUrl}${attributes.cover.data.attributes.formats.small?.url}`}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Blog',
};
