export function cmsDatabaseConfig() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

  const regex = /postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/([^?]+)/;
  const matches = process.env.DATABASE_URL.match(regex);

  if (!matches) throw new Error('DATABASE_URL is not valid');

  return {
    user: matches[1],
    password: matches[2],
    host: matches[3],
    port: Number(matches[4]),
    database: matches[5],
    ssl: process.env.DATABASE_CA_CERT
      ? {
          rejectUnauthorized: false,
          ca: process.env.DATABASE_CA_CERT,
        }
      : false,
  };
}
