import { Card } from '@/components/card';
import { IconExternalLink } from '@tabler/icons-react';
import { clsx } from 'clsx';
import { CommonOverrideAbleComponent } from '../common-override-able-component';
import { Pill } from '../pill';

type Variant = 'published' | 'wip' | 'unavailable';

interface PublishedProps {
  tag: string;
  url: string;
  title: string;
  description: string;
  variant?: 'published';
}

interface WipProps {
  url?: never;
  tag?: never;
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
    card: 'border-primary-main hover:bg-primary-main',
    title: 'group-hover:text-white',
    description: 'group-hover:text-white',
    tag: 'text-primary-main bg-primary-lighter group-hover:bg-white group-hover:text-primary-dark',
  },
  wip: { tag: 'text-primary-dark' },
  unavailable: {
    card: 'border-none bg-grey-lighter',
    title: 'text-grey-main',
    description: 'text-grey-main',
    tag: 'bg-gray-lighter text-grey-main',
  },
};

export const PublicationCard: React.FC<PublicationCardProps> = ({
  url,
  tag,
  title,
  description,
  variant = 'published',
}) => {
  const variantStyles = variantMapping[variant];
  return (
    <Card component="article" className={clsx(' group transition-all duration-300 ease-linear ', variantStyles.card)}>
      <CommonOverrideAbleComponent
        href={url}
        className="flex w-full h-full"
        component={variant === 'published' ? 'a' : 'div'}
      >
        <div className="flex gap-y-2 flex-col items-start">
          <h3 className={clsx('font-bold text-base', variantStyles.title)}>{title}</h3>
          <p className={clsx('text-sm text-grey-dark', variantStyles.description)}>
            {variant === 'unavailable'
              ? 'Binnenkort zal er een publicatie verschijnen op deze kaart, echter is deze momenteel nog in ontwikkeling.'
              : description}
          </p>
          {variant === 'published' && <Pill label={tag!} />}
          <span className={clsx('text-xs font-bold mt-auto', variantStyles.tag)}>
            {variant === 'wip' && 'Work in progress'}
            {variant === 'unavailable' && 'Binnenkort bischikbaar'}
          </span>
        </div>
        {variant === 'published' && (
          <div className="w-9 ml-auto flex items-center justify-end shrink-0">
            <IconExternalLink className="text-primary-main group-hover:text-white" />
          </div>
        )}
      </CommonOverrideAbleComponent>
    </Card>
  );
};
