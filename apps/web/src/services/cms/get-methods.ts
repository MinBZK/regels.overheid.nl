import { gqlClient } from '@/gql-client';

export async function getMethods() {
  return gqlClient.MethodsForView().then((res) => res.methods.filter(Boolean));
}
