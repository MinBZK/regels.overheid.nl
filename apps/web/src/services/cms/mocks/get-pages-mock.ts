import { GetPagesResponse } from '../get-pages';

export const getPagesMock: GetPagesResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'Home',
        slug: 'home',
      },
    },
    {
      id: 2,
      attributes: {
        name: 'Over',
        slug: 'over',
      },
    },
    {
      id: 4,
      attributes: {
        name: 'Roadmap',
        slug: 'roadmap',
      },
    },
    {
      id: 5,
      attributes: {
        name: 'Methoden',
        slug: 'methoden',
      },
    },
    {
      id: 6,
      attributes: {
        name: 'Regels',
        slug: 'regels',
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
};
