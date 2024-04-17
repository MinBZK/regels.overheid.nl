'use client';

import { cva } from '@/cva.config';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cx } from 'cva';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';

const variants = cva({
  base: 'flex px-4 text-white',
  variants: {
    variant: {
      desktop: 'h-16 items-center  hover:bg-primary-light hover:text-primary-main',
      mobile: 'h-[70px] items-center  text-white',
    },
    isActive: {
      true: 'bg-primary-light text-black',
    },
  },
  compoundVariants: [{ variant: 'mobile', isActive: true, class: 'border border-black bg-primary-light text-black' }],
});

interface Props extends Omit<VariantProps<typeof variants>, 'isActive'> {
  slug: string | null;
  name: string | null;
  className?: string;
}

export const MenuItem = forwardRef<any, Props>(({ slug, name, variant, ...props }, ref) => {
  const pathName = usePathname();

  if (!slug || !name) return null;

  const Component = slug.startsWith('http') ? 'a' : Link;

  const isActive = () => {
    if (pathName === '/' && slug === 'home') return true;

    return pathName.startsWith(`/${slug}`);
  };

  const href = () => {
    if (slug === 'home') return '/';

    if (slug.startsWith('/') || slug.startsWith('http')) return slug;

    return `/${slug}`;
  };

  return (
    <Slot ref={ref} {...props}>
      <Component href={href()} className={cx(variants({ variant, isActive: isActive() }))}>
        {name}
      </Component>
    </Slot>
  );
}) as React.FC<Props>;

MenuItem.displayName = 'MenuItem';
