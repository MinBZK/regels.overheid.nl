import { commonFetch } from '@/services/cms/common-fetch';

export interface GetPagesResponse {
  data: Data;
  meta: Record<string, never>;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cmsPage: boolean | null;
}

export const getPageBySlug = async (slug: string) =>
  commonFetch<GetPagesResponse>(`api/pages/slug/${slug}`, { next: { revalidate: 0 } });
