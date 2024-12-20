import { Pill } from '@/components/pill';
import { Typography } from '@/components/typography';
import { getPublications } from './get-publications';
import Link from 'next/link';

interface Props {
  publication: Awaited<ReturnType<typeof getPublications>>[number];
}

export const CardPublication: React.FC<Props> = ({ publication }) => {
  if (!publication.slug || !publication.title || !publication.summary) return null;

  return (
    <Link href={'/publicaties/' + publication.slug} className="rounded-md border border-grey-lighter p-6">
      <Typography variant="h3" className="mt-0 text-xl text-grey-dark">
        {publication.title}
      </Typography>
      <Typography className="mb-4 mt-2 text-grey-dark">{publication.summary}</Typography>
      <div className="flex items-start gap-x-4">
        {publication.tags?.split(',').map((tag) => (
          <Pill key={tag} label={tag.trim()} />
        ))}
      </div>
    </Link>
  );
};
