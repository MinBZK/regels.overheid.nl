import { Container } from '@/components/container';
import { RemotePage } from '@/components/remote-page';
import { Typography } from '@/components/typography';
import { getEvents } from '@/services/cms/get-events';
import { EventCard } from './event-card';
import { resolveCmsImage } from '@/common/resolve-cms-image';

export const revalidate = 300;

export default async function CalendarPage() {
  const events = await getEvents();

  return (
    <Container>
      <Typography variant="h1">Agenda</Typography>
      <RemotePage page="agenda" />
      <div className="mt-4 flex flex-col gap-y-4 border-t-2 border-t-grey-light pt-6">
        {events.map((event) => (
          <EventCard
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
