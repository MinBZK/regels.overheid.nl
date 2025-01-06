import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { Metadata } from 'next';
import { CardPublication } from './card-publication';
import { getPublications } from './get-publications';

export default async function PublicatiesPage() {
  const publications = await getPublications();

  return (
    <>
      <Container className="mb-16">
        <Typography variant="h1">Publicaties</Typography>
        <RemotePage page="publicaties" />
        <div className="mt-28 flex flex-col gap-y-4">
          {publications.map((publication) => (
            <CardPublication key={publication.id} publication={publication} />
          ))}
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid - Publicaties',
};
