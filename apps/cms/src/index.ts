export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    //
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap() {
    const actions = ['api::page.page.findOneBySlug', 'api::page.page.find', 'api::page.page.findOne'];

    const actionsFromDatabase = await strapi.db
      .query('plugin::users-permissions.permission')
      .findMany({ where: { action: { $in: actions } } });

    if (actionsFromDatabase.length > 0) return;

    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: {
        type: 'public',
      },
    });

    await Promise.all([
      strapi.db.query('api::page.page').createMany({
        data: [
          {
            name: 'Home',
            slug: 'home',
            content: 'You can edit me from the CMS!',
            publishedAt: new Date().toISOString(),
          },
          {
            name: 'Participatiewet',
            slug: 'participatiewet',
            content: 'Participatiewet',
            publishedAt: new Date().toISOString(),
          },
        ],
      }),
      ...actions.map((action) =>
        strapi.query('plugin::users-permissions.permission').create({ data: { action, role: publicRole.id } })
      ),
    ]);
  },
};
