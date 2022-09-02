export default {
  routes: [
    {
      method: 'GET',
      path: '/pages-slug/slug/:slug',
      handler: 'page.findOneBySlug',
      config: {
        tag: 'Page',
        auth: false,
        policies: [],
      },
    },
  ],
};
