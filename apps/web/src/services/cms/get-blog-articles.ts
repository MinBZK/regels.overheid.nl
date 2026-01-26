import { gqlClient } from '@/gql-client';

export function getBlogArticles() {
  return gqlClient.BlogsForView().then((res) => res.blogs.filter(Boolean));
}
