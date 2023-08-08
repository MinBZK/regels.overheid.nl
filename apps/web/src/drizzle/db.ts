import 'server-only';

import { cmsDatabaseConnectionString } from '@/common/cms-database-connection-string';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(cmsDatabaseConnectionString(), {
  ssl: {
    rejectUnauthorized: process.env.NODE_ENV !== 'production',
  },
});

export const db = drizzle(client);
