import { cmsDatabaseConfig } from '@/common/cms-database-config';
import { Config } from 'drizzle-kit';

export default {
  schema: './src/schema.ts',
  out: './src/drizzle',
  driver: 'pg',
  dbCredentials: cmsDatabaseConfig(),
} satisfies Config;
