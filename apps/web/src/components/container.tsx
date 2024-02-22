import { cx, VariantProps, cva } from '@/cva.config';

interface Props extends VariantProps<typeof variants> {
  className?: string;
}

const variants = cva({
  base: 'container px-2',
  variants: {
    bleed: {
      true: '',
      false: 'lg:max-w-4xl xl:max-w-5xl',
    },
  },
  defaultVariants: {
    bleed: false,
  },
});

export const Container: React.OverrideAbleComponentFC<'div', Props> = ({
  bleed,
  className,
  component: Component = 'div',
  ...componentProps
}) => {
  return <Component className={cx(variants({ bleed, className }))} {...componentProps} />;
};
