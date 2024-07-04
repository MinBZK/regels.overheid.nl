'use client';

import { methodsTree } from '@/common/methods-tree';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Link } from '@/components/link';
import { MethodNavigation } from '@/components/method-navigation';
import { Typography } from '@/components/typography';
import slugify from '@sindresorhus/slugify';
import {
  IconApiApp,
  IconArrowBack,
  IconArrowRight,
  IconBrandGithub,
  IconEyeEdit,
  IconFileTypeDoc,
  IconForms,
  IconHeartHandshake,
  IconPlayerPlay,
  IconScale,
  TablerIconsProps,
} from '@tabler/icons-react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren, useLayoutEffect, useState } from 'react';

const iconMap = {
  'icon-eye-edit': IconEyeEdit,
  'icon-forms': IconForms,
  'icon-api-app': IconApiApp,
};

interface DefaultLabItemCard {
  title: string;
  repo?: string;
  demo?: string;
  license?: string;
  docs?: string;
  variant?: 'default';
  description: string;
  codeOfConduct?: string;
  licenseVariant?: string;
  icon: keyof typeof iconMap;
  method?: keyof typeof methodsTree;
}

interface ComingSoonLabItemCard {
  title: string;
  description: string;
  variant: 'coming-soon';
  icon: keyof typeof iconMap;
  method?: keyof typeof methodsTree;
}

type LabItemCardProps = DefaultLabItemCard | ComingSoonLabItemCard;

interface CardFaceProps extends React.PropsWithChildren {
  front?: boolean;
}

interface LiProps extends React.PropsWithChildren {
  to: string;
}

interface ElementProps extends PropsWithChildren {
  isClone?: boolean;
  isFlipped?: boolean;
  title: string;
  description: string;
  method?: keyof typeof methodsTree;
  Icon: React.ElementType<TablerIconsProps>;
  onClick?: () => void;
}

const Li: React.FC<LiProps> = ({ children, to }) => {
  return (
    <li className="h-10">
      <Link component="a" href={to} className="flex items-center gap-x-2 text-white underline" target="_blank">
        {children}
      </Link>
    </li>
  );
};

const CardFace: React.StyleAbleFC<CardFaceProps> = ({ children, front, style, className }) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 right-0 top-0 px-12 py-6', className)}
      style={{ transform: front ? undefined : 'rotateY(180deg)', backfaceVisibility: 'hidden', ...style }}
    >
      {children}
    </div>
  );
};

const Element: React.FC<ElementProps> = ({
  children,
  isClone,
  isFlipped,
  title,
  description,
  Icon,
  method,
  onClick,
}) => {
  return (
    <Card
      className={clsx(
        'absolute bottom-0 left-0 right-0 top-0 px-0 py-0 transition-transform duration-700',
        isClone && 'invisible relative'
      )}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : undefined,
      }}
    >
      <CardFace front className={isClone ? 'relative' : undefined}>
        <div className="flex h-full flex-col items-center">
          <div className="mb-4 flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full border text-2xl shadow-sm">
            <Icon className="h-16 w-16" />
          </div>
          <Typography variant="large" className="text-center">
            {title}
          </Typography>
          <Typography className="text-center">{description}</Typography>
          {method && <MethodNavigation className="mt-4" method={method} hide="lab" />}
          <Button variant="text" className="mt-auto shrink-0" onClick={onClick} endIcon={<IconArrowRight />}>
            Meer
          </Button>
        </div>
      </CardFace>
      {children}
    </Card>
  );
};
``;

export const LabItemCard: React.FC<LabItemCardProps> = (props) => {
  const { variant, title, description, icon, method } = props;

  const pathname = usePathname();
  const [isFlipped, setIsFlipped] = useState(false);

  useLayoutEffect(() => {
    if (window.location.hash === `#${slugify(method || '')}` && !isFlipped) setIsFlipped(true);
  }, [isFlipped, method]);

  const Icon = iconMap[icon];

  if (variant === 'coming-soon')
    return (
      <Card className="flex flex-col items-center px-12 py-6">
        <div className="mb-4 flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full border text-2xl shadow-sm">
          <Icon className="h-16 w-16" />
        </div>
        <Typography variant="large" className="my-2 text-center">
          {title}
        </Typography>
        <Typography className="my-2 text-center">{description}</Typography>
        <Button disabled className="my-2 mt-auto">
          Binnenkort beschikbaar
        </Button>
      </Card>
    );

  const handleFlip = () => {
    window.history.replaceState({}, '', pathname);
    setIsFlipped(!isFlipped);
  };

  return (
    <div id={method && slugify(method, { lowercase: true })} className="relative">
      <Element isClone Icon={Icon} description={description} title={title} method={method} />
      <Element
        Icon={Icon}
        title={title}
        method={method}
        onClick={handleFlip}
        isFlipped={isFlipped}
        description={description}
      >
        <CardFace className="flex flex-col rounded-lg bg-primary-dark text-white">
          <Typography className="mb-8 font-bold">{title}</Typography>
          <ul>
            {props.demo && (
              <Li to={props.demo}>
                <IconPlayerPlay /> Probeer live demo
              </Li>
            )}
            {props.repo && (
              <Li to={props.repo}>
                <IconBrandGithub /> Git repository
              </Li>
            )}
            {props.docs && (
              <Li to={props.docs}>
                <IconFileTypeDoc /> Documentation
              </Li>
            )}
            {props.license && (
              <Li to={props.license}>
                <IconScale /> {props.licenseVariant}
              </Li>
            )}
            {props.codeOfConduct && (
              <Li to={props.codeOfConduct}>
                <IconHeartHandshake /> Code of conduct
              </Li>
            )}
          </ul>
          <Button className="mt-auto justify-center" onClick={handleFlip} endIcon={<IconArrowBack />}>
            Terug
          </Button>
        </CardFace>
      </Element>
    </div>
  );
};
