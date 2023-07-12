import { Container } from '@/components/container';
import { getBlogArticles } from '@/prisma/get-blog-articles';
import { BlogArticleCard } from './article-card';
import { Metadata } from 'next';
import { Typography } from '@/components/typography';
import slugify from '@sindresorhus/slugify';

export default async function Blog() {
  const articles = await getBlogArticles();

  return (
    <>
      <Container>
        <Typography variant="h1">Blog</Typography>
      </Container>

      <Container bleed className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
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
