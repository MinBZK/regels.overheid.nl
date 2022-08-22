module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "super-secret-key"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "super-secret-salt"),
  },
});
