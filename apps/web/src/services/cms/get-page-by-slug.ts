import { db } from '@/drizzle/db';
import { pages } from '@/drizzle/schema';
import { and, eq, lte } from 'drizzle-orm';

export async function getPageBySlug(slug: string) {
  const [page] = await db
    .select()
    .from(pages)
    .where(and(lte(pages.publishedAt, new Date().toISOString()), eq(pages.slug, slug)))
    .limit(1);

  return page;
}
