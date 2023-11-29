import { metaDataPermissions, seedMetaData } from './helpers/seed-metadata';
import { methodPermissions, seedMethods } from './helpers/seed-methods';
import { pagePermissions, seedPages } from './helpers/seed-pages';
import { seedPermissions } from './helpers/seed-permissions';

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
    const permissions = [pagePermissions, metaDataPermissions, methodPermissions].flat();

    const actionsFromDatabase = await strapi.db
      .query('plugin::users-permissions.permission')
      .findMany({ where: { action: { $in: permissions } } });

    if (actionsFromDatabase.length > 0) return;

    await Promise.all([seedPages(), seedMethods(), seedMetaData(), seedPermissions(permissions)]);
  },
};
