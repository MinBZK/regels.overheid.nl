import { cmsDatabaseConnectionString } from './src/common/cms-database-connection-string';
import { Config } from 'drizzle-kit';

export default {
  schema: './src/schema.ts',
  out: './src/drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: cmsDatabaseConnectionString(),
  },
} satisfies Config;
