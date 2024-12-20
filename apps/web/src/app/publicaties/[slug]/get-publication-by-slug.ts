import { db } from '@/drizzle/db';
import { publications } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

interface Args {
  slug: string;
}

export async function getPublicationBySlug({ slug }: Args) {
  const [publication] = await db.select().from(publications).where(eq(publications.slug, slug)).limit(1);

  return publication;
}
