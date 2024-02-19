import { cva, cx, VariantProps } from '@/cva.config';

export interface PillProps extends VariantProps<typeof variants> {
  label: string;
  className?: string;
}

const variants = cva({
  base: 'rounded px-2 py-1 text-base font-bold',
  variants: {
    variant: {
      info: 'bg-primary-lighter text-primary-main',
      warning: 'bg-warning-lighter text-warning-main',
      error: 'bg-error-lighter text-error-main',
      success: 'bg-success-lighter text-success-main',
    },
    disabled: {
      true: 'bg-gray-lighter text-grey-main',
    },
  },
  compoundVariants: [
    {
      variant: ['info', 'warning', 'error', 'success'],
      disabled: true,
      className: 'bg-gray-lighter text-grey-main',
    },
  ],
  defaultVariants: {
    variant: 'info',
    disabled: false,
  },
});

export const Pill: React.OverrideAbleComponentFC<'span', PillProps> = ({
  disabled,
  label,
  className,
  component: Component = 'span',
  variant = 'info',
  ...componentProps
}) => {
  return (
    <Component className={cx(variants({ variant, disabled, className }))} disabled={disabled} {...componentProps}>
      {label}
    </Component>
  );
};
