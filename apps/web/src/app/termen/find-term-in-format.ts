import { gqlClient } from '@/gql-client';

export interface FindTermInFormatArgs {
  slug: string;
  extension: '.json' | '.rdf' | '.ttl';
}

export async function findTermInFormat({ slug, extension }: FindTermInFormatArgs) {
  const term = await gqlClient.TermsWithFormatsBySlug({ slug }).then((res) => res.terms[0]);

  if (extension === '.json') return term?.json;

  if (extension === '.rdf') return term?.rdf;

  if (extension === '.ttl') return term?.ttl;
}
