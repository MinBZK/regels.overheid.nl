import { Card } from '@/components/card';
import { Pill } from '@/components/pill';
import slugify from '@sindresorhus/slugify';
import { IconClockHour2 } from '@tabler/icons-react';
import TimeAgo from 'javascript-time-ago';
import nl from 'javascript-time-ago/locale/nl';
import Image from 'next/image';
import Link from 'next/link';

TimeAgo.addDefaultLocale(nl);

const timeAgo = new TimeAgo('nl-NL');

interface Props {
  id: number;
  title: string;
  date?: string | null;
  category?: string | null;
  coverUrl?: string | null;
  coverAltText?: string | null;
}

export const BlogArticleCard: React.FC<Props> = async ({ id, title, category, date, coverAltText, coverUrl }) => {
  return (
    <Card component="article" className="group flex w-full flex-col overflow-hidden border-l border-t">
      <Link href={`/blog/${id}/${slugify(title)}`} className="flex h-full flex-col">
        <figure className="relative -ml-3 -mr-3 -mt-4 mb-2 aspect-[308/140] overflow-hidden">
          {coverUrl && <Image fill className="object-cover" src={coverUrl} alt={coverAltText || title} />}
        </figure>
        <div className="flex flex-1 flex-col gap-y-3">
          <h5 className="font-bold group-hover:underline">{title}</h5>
          <div className="mt-auto flex flex-col items-center">
            {category && <Pill label={category} className="self-start" />}
            {date && (
              <span className="mt-2 flex items-center text-sm font-bold text-primary-dark underline">
                <IconClockHour2 className="mr-2" />
                {timeAgo.format(new Date(date))}
              </span>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
};
