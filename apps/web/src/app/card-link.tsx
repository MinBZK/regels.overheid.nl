import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';

interface Props extends React.PropsWithChildren {
  href: string;
}

export const CardLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex h-24 items-center rounded-lg bg-grey-lighter px-6 text-xl font-bold text-primary-dark md:w-1/2"
    >
      {children}
      <IconExternalLink className="ml-auto" size={46} />
    </Link>
  );
};
