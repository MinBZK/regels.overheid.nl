import { prismaClient } from './prisma-client';

export async function getMethods() {
  return prismaClient.methods.findMany({
    where: {
      published_at: { lte: new Date() },
    },
  });
}
