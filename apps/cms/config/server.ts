export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9001),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', `http://localhost:${env.int('PORT', 9001)}/`),
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
