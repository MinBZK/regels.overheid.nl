/* eslint-disable @typescript-eslint/no-explicit-any */
export default ({ env }: any) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9001),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: 'localhost/cms',
});
