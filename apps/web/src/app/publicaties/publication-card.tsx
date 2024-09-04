import { methodsTree } from '@/common/methods-tree';
import { CardLegacy } from '@/components/card';
import { Link } from '@/components/link';
import { MethodNavigation } from '@/components/method-navigation';
import { Pill } from '@/components/pill';
import { cx } from '@/cva.config';
import slugify from '@sindresorhus/slugify';
import { IconExternalLink } from '@tabler/icons-react';
import clsx from 'clsx';
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

interface Props {
  method?: keyof typeof methodsTree;
}

type PublicationCardProps = (PublishedProps | WipProps | UnavailableProps) & Props;

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
  method,
  description,
  variant = 'published',
}) => {
  const variantStyles = variantMapping[variant];

  return (
    <CardLegacy component="article" id={method && slugify(method, { lowercase: true })} className="flex h-full">
      <div className="flex w-full flex-col items-start gap-y-2">
        <div className="flex w-full items-center justify-between">
          <h3 className={clsx('text-base font-bold', variantStyles.title)}>{title}</h3>
          {variant !== 'unavailable' && (
            <Link component="a" target="_blank" href={url} className="flex gap-x-2">
              Bekijk publicatie
              <IconExternalLink />
            </Link>
          )}
        </div>
        <p className={clsx('mb-2 text-base text-grey-dark', variantStyles.description)}>
          {variant === 'unavailable'
            ? 'Binnenkort zal er een publicatie verschijnen op deze kaart, echter is deze momenteel nog in ontwikkeling.'
            : description}
        </p>
        <div className="mt-auto flex gap-x-6">
          <Pill
            label={tag || 'Binnenkort beschikbaar'}
            variant={variant === 'wip' ? 'warning' : 'info'}
            className={cx(variant === 'unavailable' && 'bg-gray-lighter text-grey-main')}
          />
          {method && <MethodNavigation hide="publication" method={method} />}
        </div>
      </div>
    </CardLegacy>
  );
};
