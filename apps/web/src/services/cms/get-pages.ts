import { db } from '@/drizzle/db';
import { pages } from '@/drizzle/schema';
import { lte } from 'drizzle-orm';

export function getPages() {
  return db
    .select({
      id: pages.id,
      slug: pages.slug,
      name: pages.name,
    })
    .from(pages)
    .where(lte(pages.publishedAt, new Date().toISOString()))
    .orderBy(pages.order);
}
