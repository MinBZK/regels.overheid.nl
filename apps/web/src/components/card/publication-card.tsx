import { Card } from '@/components/card';
import { IconExternalLink } from '@tabler/icons-react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface PublicationCardProps {
  tag?: string;
  url?: string;
  title: string;
  description?: string;
  disabled?: boolean;
}

interface WrapperProps extends PropsWithChildren {
  disabled?: boolean;
  url?: string;
  className: string;
}

const Wrapper: React.FC<WrapperProps> = ({ disabled, className, children, url }) => {
  if (disabled || url === undefined) return <div className={className}>{children}</div>;

  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
};

export const PublicationCard: React.FC<PublicationCardProps> = ({ title, url, tag, description, disabled }) => {
  return (
    <Card
      component="article"
      disabled={disabled}
      className={clsx(!disabled && 'hover:bg-primary-main group transition-all duration-300 ease-linear')}
    >
      <Wrapper url={url} disabled={disabled} className={clsx('flex w-full h-full', disabled && 'cursor-not-allowed')}>
        <div className="flex gap-y-2 flex-col items-start">
          <h3
            className={clsx('font-bold text-base', !disabled && 'group-hover:text-white', disabled && 'text-grey-main')}
          >
            {title}
          </h3>
          <p className={clsx('text-sm', !disabled && 'group-hover:text-white', disabled && 'text-grey-main')}>
            {disabled
              ? 'Binnenkort zal er een publicatie verschijnen op deze kaart, echter is deze momenteel nog in ontwikkeling.'
              : description}
          </p>
          <span
            className={clsx(
              'px-2 py-1  text-xs font-bold rounded mt-auto',
              !disabled && 'text-primary-main bg-primary-lighter group-hover:bg-white group-hover:text-primary-dark',
              disabled && 'bg-gray-lighter text-grey-main'
            )}
          >
            {disabled ? 'Work in in progress' : tag}
          </span>
        </div>
        {!disabled && (
          <div className="w-9 ml-auto flex items-center justify-end shrink-0">
            <IconExternalLink className="text-primary-main group-hover:text-white" />
          </div>
        )}
      </Wrapper>
    </Card>
  );
};
