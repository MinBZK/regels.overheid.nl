import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Pill } from '@/components/pill';
import { RemoteMdx } from '@/components/remote-mdx';
import { Typography } from '@/components/typography';
import { IconArrowLeft, IconBlockquote, IconDownload, IconExternalLink, IconFileTypePdf } from '@tabler/icons-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { getPublicationBySlug } from './get-publication-by-slug';
import { EnhanceMenuBreadcrumbs } from '@/app/menu-breadcrumbs';

type Args = { params: { slug: string } };

export default async function PublicatiesSlugPage({ params }: Args) {
  const publication = await getPublicationBySlug({ slug: params.slug });

  return (
    <>
      <EnhanceMenuBreadcrumbs append={publication.title!} />
      <Container component="header" className="-mt-14 bg-[#F7FBFD] py-12">
        <Typography variant="h1">{publication.title}</Typography>
        <section className="flex flex-col gap-y-1 pb-2 pt-12">
          <Typography className="!mt-0 text-lg text-primary-dark">
            Gepubliceerd op: {format(publication.updatedAt!, 'dd MMMM yyyy')}
          </Typography>
          <Typography className="!mt-0 text-lg text-primary-dark">Auteurs: {publication.authors}</Typography>
          <Typography className="!mt-0 text-lg text-primary-dark">Locatie: {publication.location}</Typography>
        </section>
        <section>
          <ul className="-ml-4 flex">
            <li>
              <Button component={Link} href="#" startIcon={<IconBlockquote />} variant="text">
                Citeer dit artikel
              </Button>
            </li>
            <li>
              <Button
                component={Link}
                href={`/publicaties/${params.slug}/download`}
                startIcon={<IconFileTypePdf />}
                variant="text"
                download
              >
                Download dit artikel
              </Button>
            </li>
            <li>
              <Button component={Link} href="#" startIcon={<IconExternalLink />} variant="text" download>
                Originele bron
              </Button>
            </li>
          </ul>
        </section>
      </Container>
      <Container component="main" className="pt-12">
        <section>
          <Typography variant="h2">Samenvatting</Typography>
          <RemoteMdx content={publication.content!} />
        </section>
        <section>
          <Typography variant="h3">Trefwoorden</Typography>
          <ul className="mt-4 flex gap-x-6">
            {publication.tags?.split(',').map((tag) => (
              <Pill key={tag} component="li" label={tag} />
            ))}
          </ul>
        </section>
      </Container>
      <Container component="footer" className="pb-12">
        <div className="mt-16 flex justify-between">
          <Button component={Link} href="/publicaties" startIcon={<IconArrowLeft />}>
            Overzicht
          </Button>
          <Button
            component={Link}
            color="primary-light"
            href={`/publicaties/${params.slug}/download`}
            startIcon={<IconDownload />}
          >
            Download
          </Button>
        </div>
      </Container>
    </>
  );
}

export async function generateMetadata({ params }: Args) {
  const publication = await getPublicationBySlug({ slug: params.slug });

  return {
    title: publication.title + ' - Regelregister van de Nederlandse Overheid',
    keywords: publication.tags,
    authors: publication.authors?.split(',').map((author) => ({ name: author.trim() })),
    description: publication.summary,
  };
}
