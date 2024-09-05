'use client';

import { Button } from '@/components/button';
import { CardLegacy as RootCard } from '@/components/card-legacy';
import { Typography } from '@/components/typography';
import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props extends React.PropsWithChildren {
  title: string;
  file: string;
}

export const Card: React.FC<Props> = ({ title, children, file }) => {
  const pathname = usePathname();

  return (
    <RootCard className="flex aspect-square flex-col">
      <Typography component="h3" className="text-2xl font-bold text-primary-dark">
        {title}
      </Typography>
      <Typography>{children}</Typography>
      <Button
        variant="text"
        component={Link}
        target="__blank"
        href={`${pathname}/${file}`}
        className="ml-auto mt-auto"
        endIcon={<IconExternalLink />}
      >
        JSON
      </Button>
    </RootCard>
  );
};
