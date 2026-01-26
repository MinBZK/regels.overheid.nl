import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated/gql';

export const gqlClient = getSdk(new GraphQLClient(`${process.env.NEXT_PUBLIC_CMS_URL}/graphql`));
