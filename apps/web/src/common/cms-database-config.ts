export function cmsDatabaseConfig() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

  return {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_CA_CERT
      ? {
          ca: process.env.DATABASE_CA_CERT,
        }
      : false,
  };
}
