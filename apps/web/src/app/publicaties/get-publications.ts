import { gqlClient } from '@/gql-client';

export function getPublications() {
  return gqlClient.PublicationsForView().then((res) => res.publications.filter(Boolean));
}
