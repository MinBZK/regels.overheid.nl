import { getEventBySlug } from '@/services/cms/get-event-by-slug';
import slugify from '@sindresorhus/slugify';
import { format } from 'date-fns';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { event: string } }) {
  const event = await getEventBySlug(params.event);

  if (!event) return new Response('Event not found', { status: 404 });

  const { title, slug, intro, address } = event;

  const end = new Date(event.end);
  const start = new Date(event.start);

  const icalData = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:regels.overheid.nl/agenda/${slug}
URL: http://regels.overheid.nl/agenda/${slug}
DTSTART;TZID=Europe/Amsterdam:${format(start, `yyyyMMdd'T'HHmmss`)}
DTEND;TZID=Europe/Amsterdam:${format(end, `yyyyMMdd'T'HHmmss`)}
SUMMARY:${title}
DESCRIPTION:${intro}
LOCATION:${address}
END:VEVENT
END:VCALENDAR
    `.trim();

  return new Response(icalData, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename=${slugify(title, { lowercase: true })}.ics`,
    },
  });
}
