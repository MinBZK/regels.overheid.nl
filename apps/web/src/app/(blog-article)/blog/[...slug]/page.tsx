import { resolveCmsFile } from '@/common/resolve-cms-file';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { RemoteMdx } from '@/components/remote-mdx';
import { Typography } from '@/components/typography';
import { getBlogArticle } from '@/prisma/get-blog-article';
import { getEntityFiles } from '@/prisma/get-entity-files';
import { blog_articles } from '@prisma/client';
import { IconArrowLeft } from '@tabler/icons-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShareBar } from './share-bar';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 300;

export default async function BlogArticlePage(props: Props) {
  const id = Number(props.params.slug[0]);
  const blogArticle = (await getBlogArticle(id)) as blog_articles; // generateMetadata ensures that blogArticle exists
  const [coverFile] = await getEntityFiles('api::blog-article.blog-article', id);

  return (
    <>
      <header>
        <nav>
          <Breadcrumbs>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <span>{blogArticle.title}</span>
          </Breadcrumbs>
        </nav>
      </header>
      <Container component="main" className="pb-8 pt-14">
        <header>
          <Button component={Link} variant="tertiary" startIcon={<IconArrowLeft />} href="/blog">
            Overzicht
          </Button>
          <Typography variant="h1" className="mb-12 mt-4 ">
            {blogArticle.title}
          </Typography>
          <span className="text-grey-light">
            Publicatiedatum{' '}
            {
              // published_at at this stage cannot be null ensured in getBlogArticle
              blogArticle.published_at!.toLocaleDateString('nl-NL', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })
            }
          </span>
          <figure className="relative mb-12 mt-3 aspect-[308/140] overflow-hidden rounded-lg">
            {coverFile.files?.url && (
              <Image
                fill
                className="object-cover"
                src={resolveCmsFile(coverFile.files.url)}
                alt={coverFile.files?.alternative_text || blogArticle?.title}
              />
            )}
          </figure>
        </header>
        <article>
          <RemoteMdx content={blogArticle?.content || ''} />
        </article>
        <div className="mt-6 border-b border-t border-grey-light py-6">Categorie: {blogArticle?.category}</div>

        <p className="mb-2 mt-12 text-xl">Deel deze pagina</p>
        <ShareBar title={blogArticle.title} />
      </Container>
    </>
  );
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const [id] = params.slug;

  const blogArticle = await getBlogArticle(Number(id));

  if (!blogArticle) return notFound();

  return {
    title: `${blogArticle.title} - Blog - regels.overheid.nl`,
  };
}
