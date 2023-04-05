import { GetPagesResponse } from '../get-pages';

export const getPagesMock: GetPagesResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'Home',
        slug: 'home',
        order: 1,
      },
    },
    {
      id: 2,
      attributes: {
        name: 'Over',
        slug: 'over',
        order: 2,
      },
    },
    {
      id: 4,
      attributes: {
        name: 'Roadmap',
        slug: 'roadmap',
        order: 3,
      },
    },
    {
      id: 5,
      attributes: {
        name: 'Methoden',
        slug: 'methoden',
        order: 4,
      },
    },
    {
      id: 6,
      attributes: {
        name: 'Regels',
        slug: 'regels',
        order: 5,
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
};
