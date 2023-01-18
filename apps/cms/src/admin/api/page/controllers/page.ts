/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 *  page controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::page.page', () => ({
  async findOneBySlug(ctx) {
    const { slug = '' } = ctx.params;

    const entity = await strapi.db.query('api::page.page').findOne({
      where: {
        slug,
      },
    });

    // @ts-ignore
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    // @ts-ignore
    return this.transformResponse(sanitizedEntity, {});
  },
}));
