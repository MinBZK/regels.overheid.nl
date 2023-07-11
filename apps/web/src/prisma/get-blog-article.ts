import { prismaClient } from './prisma-client';

export const getBlogArticle = (id: number) => {
  return prismaClient.blog_articles.findFirst({ where: { id } });
};
