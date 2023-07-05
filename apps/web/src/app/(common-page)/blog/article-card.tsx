import { Card } from '@/components/card';
import { Pill } from '@/components/pill';
import { IconClockHour2 } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import TimeAgo from 'javascript-time-ago';
import nl from 'javascript-time-ago/locale/nl';

TimeAgo.addDefaultLocale(nl);

interface Props {
  url: string;
  date: Date;
  title: string;
  category: string;
  cover?: string;
  coverAlt?: string;
}

export const BlogArticleCard: React.FC<Props> = ({ title, category, cover, url, date, coverAlt }) => {
  const timeAgo = new TimeAgo('nl-NL');

  return (
    <Card component={Link} href={url} className="flex flex-col border-t border-l w-full group overflow-hidden">
      <figure className="overflow-hidden aspect-[308/140] relative -mt-4 -ml-4 -mr-4 mb-2">
        {cover && <Image src={cover} fill className="object-cover" alt={coverAlt ? coverAlt : title} />}
      </figure>
      <div className="h-[96px] flex flex-col">
        <h5 className="font-bold group-hover:underline">{title}</h5>
        <div className="mt-auto flex flex-row items-center">
          <Pill label={category} />
          <span className="flex items-center text-primary-dark font-bold text-sm underline ml-auto">
            <IconClockHour2 className="mr-2" />
            {timeAgo.format(date)}
          </span>
        </div>
      </div>
    </Card>
  );
};
