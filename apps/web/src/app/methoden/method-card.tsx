import { getMethodTree } from '@/common/methods-tree';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { MethodNavigation } from '@/components/method-navigation';
import { Pill } from '@/components/pill';
import { Typography } from '@/components/typography';
import { cva } from '@/cva.config';
import slugify from '@sindresorhus/slugify';
import { IconCornerLeftUp } from '@tabler/icons-react';
import { useState } from 'react';

interface Props {
  tag?: string | null;
  date?: string | null;
  title: string;
  className?: string;
  href: string | null;
  description: string;
}

const rootVariants = cva({
  base: 'relative flex h-96 flex-col items-start overflow-hidden',
  variants: {
    collapsed: {
      true: 'shadow-md',
      false: '',
    },
  },
});

const bodyVariants = cva({
  base: 'grid h-full overflow-hidden transition-all duration-300 ease-in-out',
  variants: {
    collapsed: {
      true: 'grid-rows-[0fr,_1fr]',
      false: 'grid-rows-[1fr,_0fr]',
    },
  },
});

const buttonIconVariants = cva({
  base: 'transition-transform',
  variants: {
    collapsed: {
      true: '-rotate-90',
      false: 'rotate-0',
    },
  },
});

export const MethodCard: React.FC<Props> = ({ title, href, description, date, className, tag }) => {
  const [collapsed, setCollapsed] = useState(false);
  const methodTree = getMethodTree(title);

  const override = href ? { docs: href } : undefined;

  return (
    <Card component="article" id={slugify(title, { lowercase: true })} className={rootVariants({ collapsed })}>
      {tag && <Pill label={tag} className="capitalize" variant={methodTree?.color} />}
      <Typography variant="h4" className="mb-6 text-black">
        {title}
      </Typography>
      <div className={bodyVariants({ collapsed })}>
        <div className="grid h-full grid-rows-[1fr,_34px] overflow-hidden">
          <div>
            <Typography className="line-clamp-6">{description}</Typography>
          </div>
          <div className="mt-auto flex">
            <MethodNavigation method={title} overrideTreeValue={override} />
          </div>
        </div>
        <div className="overflow-hidden">
          <MethodNavigation method={title} orientation="vertical" showLabel overrideTreeValue={override} />
        </div>
      </div>
      <Button
        variant="outlined"
        className="absolute bottom-4 right-3"
        onClick={() => {
          setCollapsed((prev) => !prev);
        }}
      >
        <IconCornerLeftUp className={buttonIconVariants({ collapsed })} />
      </Button>
    </Card>
  );
};
