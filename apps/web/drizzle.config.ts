import { cmsDatabaseConfig } from './src/common/cms-database-config';
import { Config } from 'drizzle-kit';

export default {
  schema: './src/schema.ts',
  out: './src/drizzle',
  driver: 'pg',
  dbCredentials: { connectionString: process.env.DATABASE_URL! },
} satisfies Config;
