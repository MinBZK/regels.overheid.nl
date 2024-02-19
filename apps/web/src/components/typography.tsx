import { cva, cx, VariantProps } from '@/cva.config';

export interface TypographyProps extends React.PropsWithChildren, VariantProps<typeof variants> {
  className?: string;
}

const variants = cva({
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-bold text-primary-dark lg:text-5xl',
      h2: 'mt-10 scroll-m-20 pb-2 text-3xl font-bold text-primary-dark first:mt-0 lg:text-4xl',
      h3: 'mt-8 scroll-m-20 text-2xl font-bold text-primary-dark',
      h4: 'mt-6 scroll-m-20 text-xl font-bold text-primary-dark',
      p: 'text-lg leading-7 [&:not(:first-child)]:mt-4',
      large: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

const variantComponent = cva({
  variants: {
    variant: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      p: 'p',
      large: 'div',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export const Typography: React.OverrideAbleComponentFC<'p', TypographyProps> = ({
  children,
  className,
  component,
  variant = 'p',
}) => {
  const Component = component || variantComponent({ variant });

  return <Component className={cx(variants({ variant, className }))}>{children}</Component>;
};
