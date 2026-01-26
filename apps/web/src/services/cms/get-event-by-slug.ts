import { gqlClient } from '@/gql-client';

export async function getEventBySlug(slug: string) {
  return gqlClient.EventsForViewBySlug({ slug }).then((res) => res.events[0]);
}
