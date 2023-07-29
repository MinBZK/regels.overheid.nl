import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Pill, PillVariant } from '@/components/pill';
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
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  tag?: string | null;
  date?: string | null;
  icon?: string | null;
  title: string;
  className?: string;
  href: string | null;
  description: string;
}

const iconMap: Record<string, React.FC<TablerIconsProps>> = {
  arch: IconBuildingArch,
  ruler: IconRuler2,
  scale: IconScale,
  megaphone: IconSpeakerphone,
  therefore: IconBinaryTree2,
  'right-angle-ruler': IconRuler,
};

const chipVariantMap: Record<string, PillVariant> = {
  methode: 'info',
  DSL: 'success',
  platform: 'warning',
  software: 'error',
};

export const MethodCard: React.FC<Props> = ({ title, href, icon, description, date, className, tag }) => {
  const Icon = icon && iconMap[icon];

  return (
    <Card component="article" className={`flex gap-x-3 overflow-hidden lg:h-[570px] xl:flex-col ${clsx(className)}`}>
      <figure className="-my-4 -ml-3 hidden w-[320px]  shrink-0 items-center justify-center bg-primary-main lg:flex xl:-mx-3 xl:mb-4 xl:h-[200px] xl:w-auto">
        {Icon && <Icon className="text-white" size={70} stroke={1} />}
      </figure>
      <div className="flex flex-1 flex-col items-start gap-y-4">
        {tag && <Pill label={tag} variant={chipVariantMap[tag]} className="mt-0 capitalize" />}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base text-grey-dark">{description}</p>
        <div className="flex w-full flex-wrap items-center justify-between lg:mt-auto">
          <hr className="mb-4 h-[1px] w-full border-0 bg-grey-dark opacity-20" />
          {date && (
            <span className="text-base font-bold text-grey-dark opacity-60">
              {new Date(date).toLocaleDateString('nl-NL', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
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
