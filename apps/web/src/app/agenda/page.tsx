import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { getEvents } from '@/services/cms/get-events';
import { EventCard } from './event-card';
import { resolveCmsImage } from '@/common/resolve-cms-image';
import { defaultMetaData } from '@/common/default-metadata';

export const revalidate = 300;

export default async function CalendarPage() {
  const [pastEvents, futureEvents] = await getEvents();

  return (
    <Container>
      <Typography variant="h1">Agenda</Typography>
      <RemotePage page="agenda" />

      <Typography variant="h2">{/* Empty to keep line spacing */}</Typography>
      <div className="flex flex-col gap-y-4 pt-6">
        {futureEvents.map((event) => (
          <EventCard
            key={event.id}
            slug={event.slug}
            intro={event.intro}
            title={event.title}
            subject={event.subject}
            address={event.address}
            end={new Date(event.end)}
            start={new Date(event.start)}
            hasReport={Boolean(event.report)}
            cover={resolveCmsImage({ ext: event.cover!.ext!, hash: event.cover!.hash! }).toString()}
          />
        ))}
      </div>
      <Typography variant="h2">{/* Empty to keep line spacing */}</Typography> 
      <div className="flex flex-col gap-y-4 pt-6">
        {pastEvents.map((event) => (
          <EventCard
            expired
            key={event.id}
            slug={event.slug}
            intro={event.intro}
            title={event.title}
            subject={event.subject}
            address={event.address}
            end={new Date(event.end)}
            start={new Date(event.start)}
            cover={resolveCmsImage({ ext: event.cover!.ext!, hash: event.cover!.hash! }).toString()}
          />
        ))}
      </div>
    </Container>
  );
}

export const generateMetadata = defaultMetaData('agenda');
