const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "0.0.0.0"),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "bank"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
    },
    debug: false,
  },
});
