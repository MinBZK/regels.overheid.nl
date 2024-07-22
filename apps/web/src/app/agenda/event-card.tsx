import { Button } from '@/components/button';
import { Typography } from '@/components/typography';
import { IconCalendarPlus, IconChevronRight } from '@tabler/icons-react';
import { cx } from 'cva';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { AddToCalendarDropdown } from './add-to-calendar-dropdown';
import { cva } from '@/cva.config';

interface Props {
  start: Date;
  end: Date;
  intro: string;
  subject: string;
  title: string;
  cover: string;
  slug: string;
  address: string;
  expired?: boolean;
  hasReport?: boolean;
}

const variants = cva({
  base: ['flex min-h-[150px] flex-col overflow-hidden rounded-lg border', 'md:flex-row'],
  variants: {
    expired: {
      true: 'grayscale',
    },
  },
});

export const EventCard: React.FC<Props> = ({
  start,
  end,
  intro,
  title,
  subject,
  cover,
  address,
  slug,
  expired,
  hasReport,
}) => {
  return (
    <div className={variants({ expired })}>
      <div className={cx('relative aspect-[2/1]', 'md:aspect-square md:w-1/5')}>
        <div className="absolute left-1/2 z-10 flex h-[84px] w-[78px] -translate-x-1/2 flex-col items-center justify-center break-words bg-primary-main text-center text-3xl uppercase text-white [word-spacing:100vw]">
          {format(start, 'd MMM', { locale: nl })}
        </div>
        <Image className="object-cover" src={cover} fill alt="" />
      </div>
      <div className="relative flex flex-1 flex-col px-3 py-2">
        {!expired && (
          <div className="absolute right-3 top-2">
            <AddToCalendarDropdown
              end={end}
              start={start}
              eventTitle={title}
              eventDetails={intro}
              eventLocation={address}
            >
              <Button variant="text" className={cx(['hidden', 'md:block'])}>
                <IconCalendarPlus />
              </Button>
            </AddToCalendarDropdown>
          </div>
        )}
        <Typography variant="h3" className="mt-0">
          {title}
        </Typography>
        <Typography variant="p">{intro}</Typography>
        <div className={cx('mt-2 flex flex-col gap-y-2', 'md:mt-auto md:flex-row md:items-center md:justify-between')}>
          <Typography>Onderwerp: {subject}</Typography>
          <div className="flex justify-between">
            <AddToCalendarDropdown
              end={end}
              start={start}
              eventTitle={title}
              eventDetails={intro}
              eventLocation={address}
            >
              <Button variant="text" className={cx(['md:hidden'])}>
                <IconCalendarPlus />
              </Button>
            </AddToCalendarDropdown>
            <Button component={Link} href={`/agenda/${slug}`} variant="text" endIcon={<IconChevronRight />}>
              {hasReport ? 'Lees raport' : 'Lees meer'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
