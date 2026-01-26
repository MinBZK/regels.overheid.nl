import { gqlClient } from '@/gql-client';

export async function getNavbarPages() {
  return gqlClient.PagesForNavbar().then((res) => res.pages);
}
