import { resolveCmsImage } from '@/common/resolve-cms-image';
import { truncateStringAtWord } from '@/common/truncate-string-at-word';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { RemoteMdx } from '@/components/remote-mdx';
import { Typography } from '@/components/typography';
import { getBlogArticleById } from '@/services/cms/get-blog-article-by-id';
import slugify from '@sindresorhus/slugify';
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
  const blogArticle = await getBlogArticleById(id);

  // Absolutely required fields, we can not render the page without these
  if (!blogArticle.title || !blogArticle.content) return notFound();

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
          <Button component={Link} variant="text" startIcon={<IconArrowLeft />} href="/blog">
            Overzicht
          </Button>
          <Typography variant="h1" className="mb-12 mt-4 ">
            {blogArticle.title}
          </Typography>
          {blogArticle.publishedAt && (
            <span className="text-grey-light">
              Publicatiedatum{' '}
              {new Date(blogArticle.publishedAt).toLocaleDateString('nl-NL', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </span>
          )}
          <figure className="relative mb-12 mt-3 aspect-[308/140] overflow-hidden rounded-lg">
            {blogArticle.cover.ext && blogArticle.cover.hash && (
              <Image
                fill
                className="object-cover"
                src={resolveCmsImage({ ext: blogArticle.cover.ext, hash: blogArticle.cover.hash, width: 1235 })}
                alt={blogArticle.cover.alt || blogArticle?.title}
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

  const blogArticle = await getBlogArticleById(Number(id));

  if (!blogArticle.title || !blogArticle.content) return notFound();

  function images() {
    if (!blogArticle.cover.ext || !blogArticle.cover.hash || !blogArticle.cover.mime) return;

    const url = resolveCmsImage({
      ext: blogArticle.cover.ext,
      hash: blogArticle.cover.hash,
      width: 1200,
      height: 630,
    });

    return {
      url,
      width: 1200,
      height: 630,
      secureUrl: url,
      type: blogArticle.cover.mime,
      alt: blogArticle.cover.alt || undefined,
    };
  }

  return {
    title: `${blogArticle.title} - Blog - regels.overheid.nl`,
    description: blogArticle.description || truncateStringAtWord(blogArticle.content || '', 100),
    alternates: {
      canonical: `https://regels.overheid.nl/blog/${blogArticle.id}/${slugify(blogArticle.title)}`,
    },
    openGraph: {
      title: blogArticle.title,
      description: blogArticle.description || truncateStringAtWord(blogArticle.content || '', 150),
      images: images(),
      url: `https://regels.overheid.nl/blog/${blogArticle.id}/${slugify(blogArticle.title)}`,
      type: 'article',
      siteName: 'regels.overheid.nl',
      locale: 'nl_NL',
    },
    twitter: {
      title: blogArticle.title,
      site: 'https://regels.ovherheid.nl',
      card: 'summary',
      images: images(),
    },
  };
}
