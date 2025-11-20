export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com', // Required for Strapi < 4.10.6; you can remove it otherwise
            'https://market-assets.strapi.io', // Required for Strapi >= 4.10.6; you can remove it otherwise
            /**
             * Note: If using a STORAGE_URL, replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` with `process.env.STORAGE_URL`.
             * If using a CDN URL, make sure to include that URL in the CSP headers, e.g., `process.env.STORAGE_CDN_URL`.
             */
            `https://${process.env.AZURE_ACCOUNT_NAME}.blob.core.windows.net`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com', // Required for Strapi < 4.10.6; you can remove it otherwise
            /**
             * Note: If using a STORAGE_URL, replace `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net` with `process.env.STORAGE_URL`.
             * If using a CDN URL, make sure to include that URL in the CSP headers, e.g., `process.env.STORAGE_CDN_URL`.
             */
            `https://${process.env.AZURE_ACCOUNT_NAME}.blob.core.windows.net`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
