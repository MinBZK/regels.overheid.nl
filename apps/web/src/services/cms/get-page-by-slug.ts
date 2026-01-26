import { gqlClient } from '@/gql-client';

export async function getPageBySlug(slug: string) {
  return gqlClient.PagesForViewBySlug({ slug }).then((res) => res.pages.filter(Boolean)[0]);
}
