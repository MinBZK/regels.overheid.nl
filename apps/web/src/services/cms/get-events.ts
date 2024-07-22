import { db } from '@/drizzle/db';
import { events, files, filesRelatedMorphs } from '@/drizzle/schema';
import { and, desc, eq, gte, lte } from 'drizzle-orm';

export function getEvents() {
  const root = db
    .select({
      id: events.id,
      intro: events.intro,
      title: events.title,
      subject: events.subject,
      start: events.start,
      slug: events.slug,
      address: events.address,
      end: events.end,
      report: events.report,
      cover: {
        ext: files.ext,
        hash: files.hash,
        alt: files.alternativeText,
      },
    })
    .from(events)
    .orderBy(desc(events.publishedAt))
    .leftJoin(filesRelatedMorphs, eq(events.id, filesRelatedMorphs.relatedId))
    .leftJoin(files, eq(files.id, filesRelatedMorphs.fileId));

  const baseWhere = [
    lte(events.publishedAt, new Date().toISOString()),
    eq(filesRelatedMorphs.relatedType, 'api::event.event'),
  ];

  const pastEvents = root.where(and(...baseWhere, lte(events.end, new Date().toISOString()))).execute();
  const futureEvents = root.where(and(...baseWhere, gte(events.start, new Date().toISOString()))).execute();

  return Promise.all([pastEvents, futureEvents]);
}
