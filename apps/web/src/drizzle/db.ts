import 'server-only';

import { cmsDatabaseConfig } from '@/common/cms-database-config';
import { drizzle } from 'drizzle-orm/node-postgres';
import path from 'path';
import { Pool } from 'pg';

const pool = new Pool({ ...cmsDatabaseConfig(), max: 1 });

export const db = drizzle(pool);
