import { cx, VariantProps, cva } from '@/cva.config';
import Styles from './container.module.scss';

interface Props extends VariantProps<typeof variants> {
  className?: string;
}

const variants = cva({
  base: 'grid w-full justify-items-start px-2',
  variants: {
    bleed: {
      true: '[&>*]:col-start-[left-2] [&>*]:col-end-[right-1] [&>*]:w-full',
      false: '[&>*]:col-start-[content] [&>*]:col-end-[content] [&>*]:w-full',
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
  return <Component className={cx(variants({ className, bleed }), Styles.columns)} {...componentProps} />;
};
