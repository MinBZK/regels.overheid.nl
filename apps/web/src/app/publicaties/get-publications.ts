import { db } from '@/drizzle/db';
import { publications } from '@/drizzle/schema';
import { and, desc, lte } from 'drizzle-orm';

export function getPublications() {
  return db
    .select()
    .from(publications)
    .orderBy(desc(publications.publicationDate))
    .where(and(lte(publications.publishedAt, new Date().toISOString())));
}
