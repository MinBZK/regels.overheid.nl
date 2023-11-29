import { db } from '@/drizzle/db';
import { blogArticles, files, filesRelatedMorphs } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export async function getBlogArticleById(id: number) {
  const [blog] = await db
    .select({
      id: blogArticles.id,
      title: blogArticles.title,
      content: blogArticles.content,
      category: blogArticles.category,
      description: blogArticles.description,
      publishedAt: blogArticles.publishedAt,
      cover: {
        ext: files.ext,
        hash: files.hash,
        mime: files.mime,
        alt: files.alternativeText,
      },
    })
    .from(blogArticles)
    .where(eq(blogArticles.id, id))
    .innerJoin(filesRelatedMorphs, eq(blogArticles.id, filesRelatedMorphs.relatedId))
    .innerJoin(files, eq(files.id, filesRelatedMorphs.fileId))
    .limit(1);

  return blog;
}
