import { prismaClient } from './prisma-client';

export function getBlogArticles() {
  return prismaClient.blog_articles.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      published_at: true,
    },
    where: {
      published_at: { lte: new Date() },
    },
    orderBy: {
      published_at: 'desc',
    },
  });
}
