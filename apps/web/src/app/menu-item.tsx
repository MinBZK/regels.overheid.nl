'use client';

import { cva, cx } from '@/cva.config';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'cva';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';

const variants = cva({
  base: 'flex px-4 text-white',
  variants: {
    variant: {
      desktop: 'h-16 items-center hover:bg-primary-light hover:text-primary-main',
      ['desktop-menu']:
        'h-16 items-center whitespace-pre text-black hover:bg-primary-main hover:text-white focus:bg-primary-main focus:text-white',
      mobile: 'h-10 items-center px-2 text-white',
      ['mobile-menu']: 'mx-4 h-10 items-center px-2 text-white',
    },
    isActive: {
      true: 'bg-primary-light text-black',
    },
    omitHover: {
      true: 'hover:bg-transparent hover:text-white',
    },
  },
  compoundVariants: [
    { variant: ['mobile', 'mobile-menu'], isActive: true, class: 'border border-black bg-primary-light text-black' },
  ],
});

interface Props extends Omit<VariantProps<typeof variants>, 'isActive'> {
  name: string | React.JSX.Element;
  slug?: string;
  className?: string;
}

export const MenuItem = forwardRef<any, Props>(({ slug, name, variant, omitHover, className, ...props }, ref) => {
  const pathName = usePathname();

  const Component = (() => {
    if (slug == null) return 'div';

    return slug.startsWith('http') ? 'a' : Link;
  })();

  const isActive = () => {
    if (pathName === '/' && slug === 'home') return true;

    return pathName.startsWith(`/${slug}`);
  };

  const href = () => {
    if (slug == null) return null;

    if (slug === 'home') return '/';

    if (slug.startsWith('/') || slug.startsWith('http')) return slug;

    return `/${slug}`;
  };

  console.log({ pathName, slug, isActive: isActive() });

  return (
    <Slot ref={ref} {...props}>
      <Component href={href() as any} className={cx(variants({ variant, omitHover, isActive: isActive(), className }))}>
        {name}
      </Component>
    </Slot>
  );
}) as React.FC<Props>;

MenuItem.displayName = 'MenuItem';
