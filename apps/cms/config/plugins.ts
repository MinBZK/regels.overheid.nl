export default ({ env }) => {
  const plugins: Record<string, any> = {
    graphql: {
      config: {
        shadowCRUD: true,
        playgroundAlways: true,
        landingPage: true,
        endpoint: '/graphql',
        subscriptions: false,
        maxLimit: Infinity,
        introspection: true,
        apolloServer: {
          introspection: true,
        },
        v4CompatibilityMode: process.env.STRAPI_GRAPHQL_V4_COMPATIBILITY_MODE ?? false,
      },
    },
  };

  if (env('AZURE_ACCOUNT_KEY'))
    plugins.upload = {
      config: {
        provider: 'strapi-provider-upload-azure-sa',
        providerOptions: {
          account: env('AZURE_ACCOUNT_NAME'),
          accountKey: env('AZURE_ACCOUNT_KEY'),
          sasToken: env('AZURE_SAS_TOKEN'),
          containerName: env('AZURE_CONTAINER_NAME'),
          defaultPath: env('AZURE_DEFAULT_PATH', 'uploads'),
          cdnBaseURL: env('AZURE_CDN_BASE_URL'),
          serviceBaseURL: env('AZURE_SERVICE_BASE_URL'),
          defaultCacheControl: env('AZURE_DEFAULT_CACHE_CONTROL'),
          removeCN: env('AZURE_REMOVE_CN'),
        },
      },
    };

  return plugins;
};
