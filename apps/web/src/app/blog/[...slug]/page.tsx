import { EnhanceMenuBreadcrumbs } from '@/app/menu-breadcrumbs';
import { truncateStringAtWord } from '@/common/truncate-string-at-word';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { RemoteMdx } from '@/components/remote-mdx';
import { ShareBar } from '@/components/share-bar';
import { Typography } from '@/components/typography';
import { getBlogArticleById } from '@/services/cms/get-blog-article-by-id';
import slugify from '@sindresorhus/slugify';
import { IconArrowLeft } from '@tabler/icons-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 300;

export default async function BlogArticlePage(props: Props) {
  const id = props.params.slug[0];
  const blog = await getBlogArticleById(id);

  if (!blog) return notFound();

  return (
    <Container component="main" className="pb-8">
      <EnhanceMenuBreadcrumbs append={blog.title} />
      <header>
        <Button component={Link} variant="text" startIcon={<IconArrowLeft />} href="/blog">
          Overzicht
        </Button>
        <Typography variant="h1" className="mb-12 mt-4 ">
          {blog.title}
        </Typography>
        {blog.publishedAt && (
          <span className="text-grey-light">
            Publicatiedatum{' '}
            {new Date(blog.publishedAt).toLocaleDateString('nl-NL', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </span>
        )}
        <figure className="relative mb-12 mt-3 aspect-[308/140] overflow-hidden rounded-lg">
          <Image fill className="object-cover" src={blog.cover.url} alt={blog.cover.alternativeText || blog.title} />
        </figure>
      </header>
      <article>
        <RemoteMdx content={blog.content || ''} />
        {blog.source && (
          <div className="mt-6 border border-primary-main bg-primary-lighter p-6 text-black">
            <RemoteMdx content={blog.source} />
          </div>
        )}
      </article>
      <div className="mt-6 border-b border-t border-grey-light py-6">Categorie: {blog.category}</div>

      <p className="mb-2 mt-12 text-xl">Deel deze pagina</p>
      <ShareBar title={blog.title} />
    </Container>
  );
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const [id] = params.slug;

  const blog = await getBlogArticleById(id);

  if (blog == null) return notFound();

  function images() {
    if (!blog) return;

    return {
      url: blog.cover.url,
      secureUrl: blog.cover.url,
      type: blog.cover.mime,
      alt: blog.cover.alternativeText || undefined,
    };
  }

  return {
    title: `${blog.title} - Blog - regels.overheid.nl`,
    description: blog.description || truncateStringAtWord(blog.content || '', 100),
    alternates: {
      canonical: `https://regels.overheid.nl/blog/${blog.id}/${slugify(blog.title)}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description || truncateStringAtWord(blog.content || '', 150),
      images: images(),
      url: `https://regels.overheid.nl/blog/${blog.id}/${slugify(blog.title)}`,
      type: 'article',
      siteName: 'regels.overheid.nl',
      locale: 'nl_NL',
    },
    twitter: {
      title: blog.title,
      site: 'https://regels.ovherheid.nl',
      card: 'summary',
      images: images(),
    },
  };
}
