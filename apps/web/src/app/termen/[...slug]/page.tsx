import { resolveCmsImage } from '@/common/resolve-cms-image';
import { Button } from '@/components/button';
import { Chip } from '@/components/chip';
import { Container } from '@/components/container';
import { Pill } from '@/components/pill';
import { Typography } from '@/components/typography';
import { db } from '@/drizzle/db';
import { files, filesRelatedMorphs, terms } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import path from 'path';
import { findTermInFormat } from '../find-term-in-format';
import { getSlugFromParams } from '../get-slug-from-params';

interface FindFieldArgs {
  input: Record<string, any>;
  key: string;
  value: string;
}

function findNodeWithField({ input, key, value }: FindFieldArgs): Record<string, any> | null {
  let result: Record<string, any> | null = null;

  function search(obj: Record<string, any>) {
    if (typeof obj !== 'object' || obj === null) return;

    for (const inputKey in obj) {
      if (inputKey === key && obj[inputKey] === value) {
        result = obj;
        return;
      }

      if (typeof obj[inputKey] === 'object') {
        search(obj[inputKey]);
        if (result) return;
      }
    }
  }

  search(input);

  return result;
}

export default async function TermenPage({ params }: { params: { slug: string[] } }) {
  const slug = getSlugFromParams(params.slug);
  const term = await findTermInFormat({ slug, extension: '.json' });

  const json = await await fetch(resolveCmsImage(term.files as any), {
    method: 'GET',
  }).then((res) => res.json() as Record<string, any>);

  const rootNode = findNodeWithField({
    input: json,
    key: '@id',
    value: `https://regels.overheid.nl/termen${slug}`,
  });

  const nlPrefLabelNode = findNodeWithField({
    input: rootNode?.['http://www.w3.org/2004/02/skos/core#prefLabel'] || {},
    key: '@language',
    value: 'nl',
  });

  const nlLabelNode = findNodeWithField({
    input: rootNode?.['http://www.w3.org/2000/01/rdf-schema#label'] || {},
    key: '@language',
    value: 'nl',
  });

  const nlScopeNoteNode = findNodeWithField({
    input: rootNode?.['http://www.w3.org/2004/02/skos/core#scopeNote'] || {},
    key: '@language',
    value: 'nl',
  });

  const nlDefinitionNode = findNodeWithField({
    input: rootNode?.['http://www.w3.org/2004/02/skos/core#definition'] || {},
    key: '@language',
    value: 'nl',
  });

  const nlPrefLabel = nlPrefLabelNode?.['@value'];

  if (!nlPrefLabel) return notFound();

  return (
    <Container>
      <div className="flex items-end gap-x-4">
        <Typography variant="h1">{nlPrefLabel}</Typography>
        <Pill label="Term" className="justify-self-start" />
      </div>
      <Typography variant="h2">Label</Typography>
      <Typography>{nlLabelNode?.['@value']}</Typography>
      <Typography variant="h2">Definitie</Typography>
      <Typography>{nlDefinitionNode?.['@value']}</Typography>
      <Typography variant="h2">Scope notitie</Typography>
      <Typography>{nlScopeNoteNode?.['@value']}</Typography>
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
