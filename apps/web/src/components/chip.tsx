import { cva, cx, VariantProps } from '@/cva.config';

export interface ChipProps extends VariantProps<typeof variants> {
  label: string;
}

const variants = cva({
  base: 'inline-flex h-8 cursor-pointer items-center rounded border px-4 text-base font-bold text-primary-dark outline-2 outline-primary-dark transition-colors focus-visible:outline',
  variants: {
    variant: {
      filled: 'border-transparent bg-primary-lighter hover:bg-primary-light focus-visible:bg-primary-light',
      outline: 'border-primary-dark text-primary-dark hover:bg-primary-light focus-visible:bg-primary-light',
    },
    disabled: {
      true: 'cursor-default text-grey-main',
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      disabled: true,
      className: 'bg-grey-lighter',
    },
    {
      variant: 'outline',
      disabled: true,
      className: 'border border-grey-light',
    },
  ],
});

export const Chip: React.OverrideAbleComponentFC<'button', ChipProps> = ({
  label,
  className,
  variant = 'filled',
  disabled = false,
  component: Component = 'button',
  ...componentProps
}) => {
  return (
    <Component className={cx(variants({ variant, disabled, className }))} {...componentProps}>
      {label}
    </Component>
  );
};
