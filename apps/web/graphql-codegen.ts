import 'dotenv/config';
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_CMS_URL}/graphql`,
  documents: 'src/**/*.graphql',
  generates: {
    './src/generated/gql/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        gqlImport: 'graphql-request#gql',
      },
    },
  },
};

export default config;
