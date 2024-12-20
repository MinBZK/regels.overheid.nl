import { db } from '@/drizzle/db';
import { files, filesRelatedMorphs, publications } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';

interface Args {
  slug: string;
}

export async function getPublicationFileBySlug({ slug }: Args) {
  const [result] = await db
    .select({ file: files })
    .from(publications)
    .leftJoin(filesRelatedMorphs, eq(publications.id, filesRelatedMorphs.relatedId))
    .leftJoin(files, eq(files.id, filesRelatedMorphs.fileId))
    .where(and(eq(publications.slug, slug), eq(filesRelatedMorphs.relatedType, 'api::publication.publication')))
    .limit(1);

  return result.file;
}
