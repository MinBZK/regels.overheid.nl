import { EnhanceMenuBreadcrumbs } from '@/app/menu-breadcrumbs';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import * as Dialog from '@/components/dialog';
import { Pill } from '@/components/pill';
import { RemoteMdx } from '@/components/remote-mdx';
import { Typography } from '@/components/typography';
import { IconArrowLeft, IconBlockquote, IconDownload, IconExternalLink, IconFileTypePdf } from '@tabler/icons-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { CopyCiteToClipboard } from './copy-cite-to-clipboard';
import { getPublicationBySlug } from './get-publication-by-slug';

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
            Gepubliceerd op: {format(publication.publicationDate!, 'dd MMMM yyyy')}
          </Typography>
          <Typography className="!mt-0 text-lg text-primary-dark">Auteurs: {publication.authors}</Typography>
          <Typography className="!mt-0 text-lg text-primary-dark">Locatie: {publication.location}</Typography>
        </section>
        <section>
          <ul className="-ml-4 flex">
            <li>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button startIcon={<IconBlockquote />} variant="text">
                    Citeer dit artikel
                  </Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Content>
                    <Dialog.Title>Citeer deze publicatie</Dialog.Title>
                    <Dialog.Description>
                      {publication.cite}
                      <div className="mt-4 flex justify-center">
                        <CopyCiteToClipboard text={publication.cite!} />
                      </div>
                    </Dialog.Description>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </li>
            <li>
              <Button
                component={Link}
                href={`/publicaties/${params.slug}/download`}
                startIcon={<IconFileTypePdf />}
                variant="text"
              >
                Download dit artikel
              </Button>
            </li>
            <li>
              <Button
                component="a"
                variant="text"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<IconExternalLink />}
                href={publication.originalSource!}
              >
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
