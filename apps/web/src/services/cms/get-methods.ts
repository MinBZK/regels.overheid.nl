import { makeURL } from './make-url';

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Visual {
  data: Data;
}

export type Icons = 'arch' | 'megaphone' | 'right-angle-ruler' | 'ruler' | 'scale' | 'therefore';

export type Tag = 'platform' | 'software' | 'DSL' | 'methode';

export interface Attributes {
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Title: string;
  Icon: Icons;
  Href: string | null;
  Tag?: Tag;
}

export interface Method {
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

export interface GetMethodsResponse {
  data: Method[];
  meta: Meta;
}

export const getMethods = ({ includeVisual = false }: { includeVisual: boolean }) => {
  const url = makeURL('api/methods?sort[0]=Title');

  if (includeVisual) url.searchParams.set('populate', 'Visual');

  return fetch(url.toString()).then((res) => res.json() as Promise<GetMethodsResponse>);
};
