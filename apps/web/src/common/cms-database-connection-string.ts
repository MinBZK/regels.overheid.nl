export function cmsDatabaseConnectionString() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;

  throw new Error('DATABASE_URL is not set');
}
