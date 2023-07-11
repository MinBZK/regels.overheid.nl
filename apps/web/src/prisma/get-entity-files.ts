import { prismaClient } from './prisma-client';

type EntityName = 'api::blog-article.blog-article';

export function getEntityFiles(entityName: EntityName, entityId: number) {
  return prismaClient.files_related_morphs.findMany({
    where: {
      related_id: entityId,
      related_type: entityName,
    },
    include: {
      files: true,
    },
  });
}
