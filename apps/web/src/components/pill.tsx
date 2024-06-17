import { cva, cx, VariantProps } from '@/cva.config';

export interface PillProps extends VariantProps<typeof pillVariants> {
  label?: string;
  className?: string;
  startIcon?: React.ReactNode;
}

export const pillVariants = cva({
  base: 'inline-flex gap-x-2 rounded px-2 py-1 text-base font-bold',
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
  label,
  disabled,
  className,
  startIcon,
  component: Component = 'span',
  variant = 'info',
  ...componentProps
}) => {
  return (
    <Component className={cx(pillVariants({ variant, disabled, className }))} disabled={disabled} {...componentProps}>
      {startIcon}
      {label}
    </Component>
  );
};
