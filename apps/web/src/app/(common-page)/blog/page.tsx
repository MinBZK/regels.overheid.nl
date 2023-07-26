import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { getBlogArticles } from '@/prisma/get-blog-articles';
import slugify from '@sindresorhus/slugify';
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
        {articles.map(({ id, category, published_at, title }) => (
          <BlogArticleCard
            id={id}
            key={id}
            title={title}
            category={category}
            url={`/blog/${id}/${slugify(title)}`}
            date={published_at!}
          />
        ))}
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Blog',
};
