import { resolveCmsImage } from '@/common/resolve-cms-image';
import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { getBlogArticles } from '@/services/cms/get-blog-articles';
import { Metadata } from 'next';
import { BlogArticleCard } from './article-card';

export default async function Blog() {
  const articles = await getBlogArticles();

  return (
    <>
      <Container>
        <Typography variant="h1">Blog</Typography>
        <RemotePage page="blog" />
      </Container>
      <Container className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
        {articles.map(
          ({ id, category, publishedAt, title, cover }) =>
            title && (
              <BlogArticleCard
                id={id}
                key={id}
                title={title}
                date={publishedAt}
                category={category}
                coverUrl={
                  cover.ext && cover.hash
                    ? resolveCmsImage({ ext: cover.ext, hash: cover.hash, width: 720 }).toString()
                    : null
                }
              />
            )
        )}
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Blog',
};
