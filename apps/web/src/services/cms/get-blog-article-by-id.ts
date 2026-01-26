import { gqlClient } from '@/gql-client';

export async function getBlogArticleById(id: string) {
  return gqlClient.BlogForViewByID({ id }).then((res) => res.blog);
}
