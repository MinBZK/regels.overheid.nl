import { resolveCmsImage } from '@/common/resolve-cms-image';
import { Button } from '@/components/button';
import { Typography } from '@/components/typography';
import { cx } from '@/cva.config';
import { getEvents } from '@/services/cms/get-events';
import { IconArrowRight } from '@tabler/icons-react';
import { format, isAfter } from 'date-fns';
import { nl } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  event: Awaited<ReturnType<typeof getEvents>>[number];
}

export const CardEvent: React.FC<Props> = ({ event }) => {
  const hasReport = Boolean(event.report);
  const isExpired = isAfter(new Date(), event.start);

  return (
    <article className={cx('flex w-80 shrink-0 flex-col overflow-hidden rounded border', isExpired && 'grayscale')}>
      <figure className="relative h-36 overflow-hidden">
        <Image
          fill
          className="object-cover"
          alt={event.cover?.alt || event.title}
          src={resolveCmsImage({ ext: event.cover!.ext!, hash: event.cover!.hash! }).toString()}
        />
        <div className="absolute left-1/2 z-10 flex h-[84px] w-[78px] -translate-x-1/2 flex-col items-center justify-center break-words bg-primary-main text-center text-3xl uppercase text-white [word-spacing:100vw]">
          {format(event.start, 'd MMM', { locale: nl })}
        </div>
      </figure>
      <div className="flex h-full flex-col px-5">
        <Typography variant="h3" className="mb-4">
          {event.title}
        </Typography>
        <Typography className="mb-2">
          <span className="font-semibold">Onderwerp: </span>
          {event.subject}
        </Typography>
        <Typography>{event.intro}</Typography>
        <div className="mt-auto flex py-4">
          <Button
            variant="text"
            component={Link}
            className="ml-auto"
            endIcon={<IconArrowRight />}
            href={`/agenda/${event.slug}`}
          >
            {hasReport ? 'Lees verslag' : 'Lees meer'}
          </Button>
        </div>
      </div>
    </article>
  );
};
