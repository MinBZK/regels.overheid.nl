import 'server-only';

import { cmsDatabaseConnectionString } from '@/common/cms-database-connection-string';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(cmsDatabaseConnectionString());

export const db = drizzle(client);
