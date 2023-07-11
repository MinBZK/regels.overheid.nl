import { resolveCmsFile } from '@/common/resolve-cms-file';
import { Card } from '@/components/card';
import { Pill } from '@/components/pill';
import { getEntityFiles } from '@/prisma/get-entity-files';
import { IconClockHour2 } from '@tabler/icons-react';
import TimeAgo from 'javascript-time-ago';
import nl from 'javascript-time-ago/locale/nl';
import Image from 'next/image';
import Link from 'next/link';

TimeAgo.addDefaultLocale(nl);

const timeAgo = new TimeAgo('nl-NL');

interface Props {
  id: number;
  url: string;
  date: Date;
  title: string;
  category: string;
}

export const BlogArticleCard: React.FC<Props> = async ({ id, title, category, url, date }) => {
  const [coverFile] = await getEntityFiles('api::blog-article.blog-article', id);

  return (
    <Card component="article" className="group flex w-full flex-col overflow-hidden border-l border-t">
      <Link href={url}>
        <figure className="relative -ml-4 -mr-4 -mt-4 mb-2 aspect-[308/140] overflow-hidden">
          {coverFile && (
            <Image
              fill
              className="object-cover"
              src={resolveCmsFile(coverFile.files!.url!)}
              alt={coverFile.files?.alternative_text || title}
            />
          )}
        </figure>
        <div className="flex h-[96px] flex-col">
          <h5 className="font-bold group-hover:underline">{title}</h5>
          <div className="mt-auto flex flex-row items-center">
            <Pill label={category} />
            <span className="ml-auto flex items-center text-sm font-bold text-primary-dark underline">
              <IconClockHour2 className="mr-2" />
              {timeAgo.format(date)}
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};
