import { db } from '@/drizzle/db';
import { events, files, filesRelatedMorphs } from '@/drizzle/schema';
import { and, desc, eq } from 'drizzle-orm';

export async function getEventBySlug(slug: string) {
  const [event] = await db
    .select({
      id: events.id,
      intro: events.intro,
      title: events.title,
      subject: events.subject,
      start: events.start,
      slug: events.slug,
      content: events.content,
      address: events.address,
      end: events.end,
      addressName: events.addressName,
      eventbrite: events.eventbrite,
      eventbriteTitle: events.eventbriteTitle,
      report: events.report,
      cover: {
        ext: files.ext,
        hash: files.hash,
        alt: files.alternativeText,
        mime: files.mime,
      },
    })
    .from(events)
    .orderBy(events.id, desc(events.publishedAt))
    .leftJoin(filesRelatedMorphs, eq(events.id, filesRelatedMorphs.relatedId))
    .leftJoin(files, eq(files.id, filesRelatedMorphs.fileId))
    .where(and(eq(events.slug, slug), eq(filesRelatedMorphs.relatedType, 'api::event.event')))
    .limit(1);

  return event;
}
