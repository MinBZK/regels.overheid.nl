export const metaDataPermissions = ['api::application-metadata.application-metadata.find'];

export const seedMetaData = async () => {
  return strapi.db.query('api::application-metadata.application-metadata').createMany({
    data: [
      {
        id: 1,
        version: '1.0.0',
        versionUpdatedAt: '2023-01-16',
        publishedAt: new Date().toISOString(),
      },
    ],
  });
};
