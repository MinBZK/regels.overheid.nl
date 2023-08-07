import { db } from '@/drizzle/db';
import { desc, eq, lte } from 'drizzle-orm';
import { blogArticles, files, filesRelatedMorphs } from '../../drizzle/schema';

export function getBlogArticles() {
  return db
    .select({
      id: blogArticles.id,
      title: blogArticles.title,
      category: blogArticles.category,
      publishedAt: blogArticles.publishedAt,
      cover: {
        ext: files.ext,
        hash: files.hash,
        alt: files.alternativeText,
      },
    })
    .from(blogArticles)
    .innerJoin(filesRelatedMorphs, eq(blogArticles.id, filesRelatedMorphs.relatedId))
    .innerJoin(files, eq(files.id, filesRelatedMorphs.fileId))
    .where(lte(blogArticles.publishedAt, new Date().toISOString()))
    .orderBy(desc(blogArticles.publishedAt));
}
