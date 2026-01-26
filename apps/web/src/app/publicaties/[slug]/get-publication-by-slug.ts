import { gqlClient } from '@/gql-client';

interface Args {
  slug: string;
}

export async function getPublicationBySlug({ slug }: Args) {
  return gqlClient.PublicationsForViewBySlug({ slug }).then((res) => res.publications[0]);
}
