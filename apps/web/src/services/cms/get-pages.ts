import { makeURL } from './make-url';

export interface Attributes {
  name: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Page {
  id: number;
  attributes: Attributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface GetPagesResponse {
  data: Page[];
  meta: Meta;
}

export const getPages = () => {
  const url = makeURL('api/pages');

  return fetch(url).then((res) => res.json() as Promise<GetPagesResponse>);
};
