import { db } from '@/drizzle/db';
import { files, filesRelatedMorphs, terms } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';

export interface FindTermInFormatArgs {
  slug: string;
  extension: '.json' | '.rdf' | '.ttl';
}

export async function findTermInFormat({ extension, slug }: FindTermInFormatArgs) {
  const [term] = await db
    .select()
    .from(terms)
    .leftJoin(
      filesRelatedMorphs,
      and(eq(terms.id, filesRelatedMorphs.relatedId), eq(filesRelatedMorphs.relatedType, 'api::term.term'))
    )
    .leftJoin(files, and(eq(files.id, filesRelatedMorphs.fileId)))
    .where(and(eq(terms.slug, slug), eq(files.ext, extension)))
    .limit(1);

  return term;
}
