import { db } from '@/drizzle/db';
import { pages } from '@/drizzle/schema';
import { and, eq, lte } from 'drizzle-orm';

export function getNavbarPages() {
  return db
    .select({
      id: pages.id,
      slug: pages.slug,
      name: pages.name,
    })
    .from(pages)
    .where(and(lte(pages.publishedAt, new Date().toISOString()), eq(pages.showInNav, true)))
    .orderBy(pages.order);
}
