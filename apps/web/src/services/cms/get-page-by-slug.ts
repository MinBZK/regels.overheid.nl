import { commonFetch } from '@/services/cms/common-fetch';
import type { Page } from './get-pages';

export interface GetPagesResponse {
  data: Page;
  meta: Record<string, never>;
}

export const getPageBySlug = async (slug: string) => commonFetch<GetPagesResponse>(`api/pages/slug/${slug}`);
