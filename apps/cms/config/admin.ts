/* eslint-disable @typescript-eslint/no-explicit-any */
export default ({ env }: any) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
