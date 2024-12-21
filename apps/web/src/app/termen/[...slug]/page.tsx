import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Pill } from '@/components/pill';
import { Typography } from '@/components/typography';
import { notFound } from 'next/navigation';
import { getSlugFromParams } from '../get-slug-from-params';
import { getParsedTerm } from './get-parsed-term';

type Args = {
  params: { slug: string[] };
};

export default async function TermenPage({ params }: Args) {
  const slug = getSlugFromParams(params.slug);
  const { nlDefinition, nlPrefLabel, nlScopeNote, nlLabel } = await getParsedTerm({ slug });

  if (!nlPrefLabel) return notFound();

  return (
    <Container>
      <div className="flex items-end gap-x-4">
        <Typography variant="h1">{nlPrefLabel}</Typography>
        <Pill label="Term" className="justify-self-start" />
      </div>
      <Typography variant="h2">Label</Typography>
      <Typography>{nlLabel}</Typography>
      <Typography variant="h2">Definitie</Typography>
      <Typography>{nlDefinition}</Typography>
      <Typography variant="h2">Scope notitie</Typography>
      <Typography>{nlScopeNote}</Typography>
      <Typography>{nlDefinition}</Typography>
      <Typography variant="h3">Download</Typography>
      <div className="mt-4 flex gap-x-2">
        <Button component="a" href={`/termen/download/rdf${slug}`}>
          RDF/XML
        </Button>
        <Button component="a" href={`/termen/download/ttl${slug}`}>
          Turtle
        </Button>
        <Button component="a" href={`/termen/download/json${slug}`}>
          JSON-LD
        </Button>
      </div>
    </Container>
  );
}

export async function generateMetadata({ params }: Args) {
  const slug = getSlugFromParams(params.slug);
  const { nlDefinition, nlPrefLabel } = await getParsedTerm({ slug });

  return {
    title: 'Regelregister van de Nederlandse Overheid - ' + nlPrefLabel,
    description: nlDefinition,
  };
}
