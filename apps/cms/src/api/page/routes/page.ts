/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * page router.
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::page.page');

const makeRouter = (coreRoutes: any, overrideRoutes: any[], extraRoutes: any[]) => {
  let routes: any[];

  return {
    get prefix() {
      return coreRoutes.prefix;
    },
    get routes() {
      if (!routes) routes = coreRoutes.routes;

      const newRoutes = routes.map((route) => {
        const override = overrideRoutes.find(
          (override) => route.handler === override.handler && route.method === override.method
        );

        return override || route;
      });

      return extraRoutes.concat(newRoutes);
    },
  };
};

const overrides: any[] = [];

const extraRoutes = [
  {
    method: 'GET',
    path: '/pages/slug/:slug',
    handler: 'page.findOneBySlug',
    config: {
      auth: false,
      policies: [],
    },
  },
];

export default makeRouter(defaultRouter, overrides, extraRoutes);
