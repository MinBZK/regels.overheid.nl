import { Pool } from 'pg';

export const strapiDatabase = new Pool({
  connectionString: process.env.CMS_DATABASE_URL,
});
