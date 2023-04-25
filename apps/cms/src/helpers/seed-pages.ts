export const pagePermissions = ['api::page.page.findOneBySlug', 'api::page.page.find', 'api::page.page.findOne'];

export const seedPages = async () => {
  return Promise.all([
    strapi.db.query('api::page.page').createMany({
      data: [
        {
          name: 'Home',
          slug: 'home',
          content: `You can edit this content from the cms!`,
          order: 1,
          publishedAt: new Date().toISOString(),
          cmsPage: true,
        },
        {
          name: 'Roadmap',
          slug: 'roadmap',
          order: 2,
          publishedAt: new Date().toISOString(),
          cmsPage: false,
        },
        {
          name: 'Methoden',
          slug: 'methoden',
          order: 3,
          cmsPage: false,
          publishedAt: new Date().toISOString(),
        },
      ],
    }),
  ]);
};
