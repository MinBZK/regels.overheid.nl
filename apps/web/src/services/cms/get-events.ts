import { gqlClient } from '@/gql-client';

export function getEvents() {
  return gqlClient.EventsForView().then((res) => res.events.filter(Boolean));
}
