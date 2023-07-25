import { Card } from '@/components/card';
import { Pill } from '@/components/pill';
import { IconExternalLink } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

type Variant = 'published' | 'wip' | 'unavailable';

interface PublishedProps {
  tag: string;
  url: string;
  title: string;
  description: string;
  variant?: 'published';
}

interface WipProps {
  url: string;
  tag: string;
  title: string;
  variant: 'wip';
  description: string;
}

interface UnavailableProps {
  url?: never;
  tag?: never;
  title: string;
  description?: never;
  variant: 'unavailable';
}

type PublicationCardProps = PublishedProps | WipProps | UnavailableProps;

type VariantMappingComponent = 'card' | 'title' | 'description' | 'tag';

const variantMapping: Record<Variant, Partial<Record<VariantMappingComponent, string>>> = {
  published: {
    card: 'hover:bg-primary-lighter hover:border-primary-lighter hover:drop-shadow-sm',
    title: 'group-hover:underline',
    description: '',
    tag: 'text-primary-main bg-primary-lighter group-hover:bg-white group-hover:text-primary-dark',
  },
  wip: {
    card: 'hover:bg-warning-lighter hover:border-warning-lighter hover:drop-shadow-sm',
    title: 'group-hover:underline',
    description: '',
    tag: 'text-primary-main bg-primary-lighter group-hover:bg-white group-hover:text-primary-dark',
  },
  unavailable: {
    card: 'border-none bg-grey-lighter',
    title: 'text-grey-main',
    description: 'text-grey-main',
    tag: 'bg-gray-lighter text-grey-main',
  },
};

const wrapperComponentTag = (variant: Variant) => {
  if (variant === 'published' || variant === 'wip') return 'article';

  return Fragment;
};

const cardComponentTag = (variant: Variant) => {
  if (variant === 'published') return Link;

  if (variant === 'wip') return 'a';

  return 'article';
};

export const PublicationCard: React.FC<PublicationCardProps> = ({
  url,
  tag,
  title,
  description,
  variant = 'published',
}) => {
  const variantStyles = variantMapping[variant];

  const Wrapper = wrapperComponentTag(variant);

  return (
    <Wrapper>
      <Card
        href={url!}
        component={cardComponentTag(variant)}
        className={clsx(variantStyles.card, 'group flex h-full transition-all duration-150 ease-linear')}
      >
        <div className={clsx('flex flex-col items-start gap-y-2')}>
          <h3 className={clsx('text-base font-bold', variantStyles.title)}>{title}</h3>
          <p className={clsx('mb-2 text-base text-grey-dark', variantStyles.description)}>
            {variant === 'unavailable'
              ? 'Binnenkort zal er een publicatie verschijnen op deze kaart, echter is deze momenteel nog in ontwikkeling.'
              : description}
          </p>
          {variant !== 'unavailable' && (
            <Pill label={tag!} variant={variant === 'wip' ? 'warning' : 'info'} className="group-hover:bg-white" />
          )}
          {variant === 'unavailable' && (
            <span className={clsx('mt-auto text-base font-bold', variantStyles.tag)}>Binnenkort beschikbaar</span>
          )}
        </div>
        {variant !== 'unavailable' && (
          <div className="ml-auto flex w-9 shrink-0 items-center justify-end">
            <IconExternalLink className="text-primary-main group-hover:text-black" />
          </div>
        )}
      </Card>
    </Wrapper>
  );
};
