import { prismaClient } from './prisma-client';

export function getPageBySlug(slug: string) {
  return prismaClient.pages.findFirst({
    where: { slug, cms_page: true, published_at: { lte: new Date() } },
  });
}
