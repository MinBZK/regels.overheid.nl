import { findTermInFormat } from '../find-term-in-format';
import { notFound } from 'next/navigation';

type Args = {
  slug: string;
};

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

export async function getParsedTerm({ slug }: Args) {
  const file = await findTermInFormat({ slug, extension: '.json' });

  if (!file) throw notFound();

  const json = await fetch(file.url, {
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

  const nlDefinitionNode = findNodeWithField({
    input: rootNode?.['http://www.w3.org/2004/02/skos/core#definition'] || {},
    key: '@language',
    value: 'nl',
  });

  const nlScopeNoteNode = findNodeWithField({
    input: rootNode?.['http://www.w3.org/2004/02/skos/core#scopeNote'] || {},
    key: '@language',
    value: 'nl',
  });

  const nlLabelNode = findNodeWithField({
    input: rootNode?.['http://www.w3.org/2000/01/rdf-schema#label'] || {},
    key: '@language',
    value: 'nl',
  });

  return {
    nlLabel: nlLabelNode?.['@value'],
    nlScopeNote: nlScopeNoteNode?.['@value'],
    nlPrefLabel: nlPrefLabelNode?.['@value'],
    nlDefinition: nlDefinitionNode?.['@value'],
  };
}
