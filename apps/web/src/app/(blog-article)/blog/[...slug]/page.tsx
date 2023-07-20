import { resolveCmsImage } from '@/common/resolve-cms-image';
import { truncateStringAtWord } from '@/common/truncate-string-at-word';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { RemoteMdx } from '@/components/remote-mdx';
import { Typography } from '@/components/typography';
import { getBlogArticle } from '@/prisma/get-blog-article';
import { getEntityFiles } from '@/prisma/get-entity-files';
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
  const blogArticle = (await getBlogArticle(id))!; // generateMetadata ensures that blogArticle exists
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
            {coverFile.files?.ext && coverFile.files.hash && (
              <Image
                fill
                className="object-cover"
                src={resolveCmsImage({ ext: coverFile.files.ext, hash: coverFile.files.hash, width: 1235 })}
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

  const [coverFile] = await getEntityFiles('api::blog-article.blog-article', blogArticle.id);

  function images() {
    if (!coverFile.files?.ext || !coverFile.files?.hash || !coverFile.files?.mime) return;

    const url = resolveCmsImage({
      ext: coverFile.files.ext,
      hash: coverFile.files.hash,
      width: 1200,
      height: 630,
    });

    return {
      url,
      width: 1200,
      height: 630,
      secureUrl: url,
      type: coverFile.files.mime,
      alt: coverFile.files.alternative_text || undefined,
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
