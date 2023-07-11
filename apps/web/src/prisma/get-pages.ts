import { prismaClient } from './prisma-client';

export function getPages() {
  return prismaClient.pages.findMany({
    select: { id: true, slug: true, name: true },
    where: {
      published_at: { lte: new Date() },
    },
    orderBy: {
      order: 'asc',
    },
  });
}
