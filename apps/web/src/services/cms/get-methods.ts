import { db } from '@/drizzle/db';
import { methods } from '@/drizzle/schema';
import { lte } from 'drizzle-orm';

export function getMethods() {
  return db.select().from(methods).where(lte(methods.publishedAt, new Date().toISOString()));
}
