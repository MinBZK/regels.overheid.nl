import { MethodTree, methodsTree } from '@/common/methods-tree';
import { VariantProps, cva, cx } from '@/cva.config';
import slugify from '@sindresorhus/slugify';
import { IconBook2, IconFileTypeDoc, IconMicroscope, IconPlayerPlay } from '@tabler/icons-react';
import NextLink from 'next/link';
import { HTMLProps } from 'react';

const foo: Required<MethodTree['color']> = undefined;

const variants = cva({
  base: 'flex gap-x-6',
  variants: {
    variant: {
      Flint: 'border-red-500 text-red-500',
      'De LegitiMaat': '',
    } satisfies Record<keyof typeof methodsTree, string>,
    color: {
      error: 'border-error-main text-error-main',
      info: 'border-primary-main text-primary-main',
      success: 'border-success-main text-success-main',
      warning: 'border-warning-main text-warning-main',
    } satisfies Record<Exclude<MethodTree['color'], undefined>, string>,
  },
});

interface MethodNavigationProps extends VariantProps<typeof variants> {
  hide: keyof MethodTree;
}

interface LinkProps extends HTMLProps<HTMLAnchorElement> {}

const Link: React.OverrideAbleComponentFC<'a', LinkProps> = ({ component: Component = 'a', ...props }) => (
  <Component className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-inherit p-1" {...props} />
);

export const MethodNavigation: React.FC<MethodNavigationProps> = ({ variant, hide }) => {
  if (!variant || !methodsTree[variant]) return null;

  const methodTree = methodsTree[variant] as MethodTree;

  const hasItemsToShow = Object.keys(methodTree).filter((key) => ![hide, 'color'].includes(key)).length > 0;

  if (!hasItemsToShow) return null;

  const canShowItem = (item: keyof MethodTree) => item !== hide && item in methodTree;

  return (
    <div className={cx(variants({ variant, color: methodTree.color }))}>
      {canShowItem('docs') && (
        <Link href={methodTree.docs}>
          <IconFileTypeDoc />
        </Link>
      )}
      {canShowItem('demo') && (
        <Link href={methodTree.demo}>
          <IconPlayerPlay />
        </Link>
      )}
      {canShowItem('demo') && (
        <Link component={NextLink} href={`/lab#${slugify(variant, { lowercase: true })}`}>
          <IconMicroscope />
        </Link>
      )}
      {canShowItem('publication') && (
        <Link href={methodTree.publication}>
          <IconBook2 />
        </Link>
      )}
    </div>
  );
};
