import { db } from '@/drizzle/db';
import { events, files, filesRelatedMorphs } from '@/drizzle/schema';
import { desc, eq, lte } from 'drizzle-orm';

export function getEvents() {
  return db
    .selectDistinctOn([events.id], {
      id: events.id,
      intro: events.intro,
      title: events.title,
      subject: events.subject,
      start: events.start,
      slug: events.slug,
      address: events.address,
      end: events.end,
      cover: {
        ext: files.ext,
        hash: files.hash,
        alt: files.alternativeText,
      },
    })
    .from(events)
    .orderBy(events.id, desc(events.publishedAt))
    .leftJoin(filesRelatedMorphs, eq(events.id, filesRelatedMorphs.relatedId))
    .leftJoin(files, eq(files.id, filesRelatedMorphs.fileId))
    .where(lte(events.publishedAt, new Date().toISOString()));
}
