import { VariantProps, cva, cx } from '@/cva.config';

export interface ButtonProps extends React.PropsWithChildren, VariantProps<typeof variants> {
  className?: string;
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
}

const variants = cva({
  base: 'flex h-10 items-center rounded-lg px-4 text-base',
  variants: {
    variant: {
      text: 'text-primary-dark underline hover:text-primary-main',
      contained: 'bg-primary-dark text-white outline-black hover:bg-primary-main focus:bg-primary-main focus:outline-2',
      outlined:
        'border border-primary-dark text-primary-dark outline-primary-main hover:border-primary-main hover:text-primary-main focus:border-primary-main focus:text-primary-main focus:underline focus:outline',
    },
    color: { 'primary-dark': '', 'primary-light': '' },
    disabled: { true: '' },
  },
  compoundVariants: [
    {
      variant: 'contained',
      color: 'primary-light',
      className: 'bg-primary-light text-primary-dark hover:bg-primary-lighter focus:bg-primary-lighter',
    },
    {
      variant: 'contained',
      disabled: true,
      className: 'bg-grey-light text-grey-dark',
    },
    {
      variant: 'outlined',
      disabled: true,
      className: 'border-grey-main text-grey-main',
    },
    { variant: 'text', disabled: true, className: 'text-grey-main' },
  ],
});

export const Button: React.OverrideAbleComponentFC<'button', ButtonProps> = ({
  children,
  endIcon,
  startIcon,
  className,
  disabled = false,
  variant = 'contained',
  color = 'primary-dark',
  component: Component = 'button',
  ...componentProps
}) => {
  return (
    <Component
      className={cx(variants({ variant, color, disabled, className }))}
      disabled={disabled}
      {...componentProps}
    >
      {startIcon && <span className="mr-3">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-3">{endIcon}</span>}
    </Component>
  );
};
