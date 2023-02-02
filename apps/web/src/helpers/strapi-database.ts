import { Pool } from 'pg';

export const strapiDatabase = new Pool({
  connectionString: 'postgresql://postgres:postgres@postgres:5432/strapi',
});
