import { Card } from '@/components/card';
import { Pill, PillVariant } from '@/components/pill';
import { Icons, Tag } from '@/services/cms/get-methods';
import {
  IconArrowRight,
  IconBinaryTree2,
  IconBuildingArch,
  IconRuler,
  IconRuler2,
  IconScale,
  IconSpeakerphone,
  TablerIconsProps,
} from '@tabler/icons-react';
import Link from 'next/link';
import { Button } from '../button';
import { clsx } from 'clsx';
import { ucfirst } from '@/helpers/ucfirst';

interface Props {
  date: string;
  title: string;
  icon: Icons | null;
  href: string | null;
  description: string;
  className?: string;
  tag: Tag;
}

const iconMap: Record<Icons, React.FC<TablerIconsProps>> = {
  arch: IconBuildingArch,
  ruler: IconRuler2,
  scale: IconScale,
  megaphone: IconSpeakerphone,
  therefore: IconBinaryTree2,
  'right-angle-ruler': IconRuler,
};

const chipVariantMap: Record<Tag, PillVariant> = {
  methode: 'info',
  DSL: 'success',
  platform: 'warning',
  software: 'error',
};

export const MethodCard: React.FC<Props> = ({ title, href, icon, description, date, className, tag }) => {
  const Icon = icon && iconMap[icon];
  const enhancedDate = new Date(date);

  return (
    <Card className={`lg:h-[320x] flex overflow-hidden gap-x-3 xl:flex-col ${clsx(className)}`}>
      <figure className="hidden lg:flex items-center justify-center  bg-primary-main w-[320px] shrink-0 -my-4 -ml-3 xl:h-[200px] xl:w-auto xl:-mx-3 xl:mb-4">
        {Icon && <Icon className="text-white" size={70} stroke={1} />}
      </figure>
      <div className="flex flex-col gap-y-4 items-start">
        <Pill label={tag} variant={chipVariantMap[tag]} className="capitalize" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-grey-dark">{description}</p>
        <div className="flex w-full items-center justify-between flex-wrap">
          <hr className="w-full mb-4 border-0 h-[1px] bg-grey-dark opacity-20" />
          <span className="text-base font-bold opacity-60 text-grey-dark">
            {enhancedDate.toLocaleDateString('nl-NL', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          {href && (
            <Button href={href} component={Link} endIcon={<IconArrowRight />}>
              Lees meer
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
