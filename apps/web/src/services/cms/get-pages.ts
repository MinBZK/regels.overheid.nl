import { makeURL } from './make-url';

export interface Attributes {
  name: string;
  slug: string;
  order: number | null;
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
  const url = makeURL('api/pages?fields[0]=name&fields[1]=slug&fields[2]=order&sort[0]=order');

  return fetch(url.toString()).then((res) => res.json() as Promise<GetPagesResponse>);
};
