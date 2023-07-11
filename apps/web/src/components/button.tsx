import clsx from 'clsx';
import { OverrideAbleComponentFunctionComponent } from './override-able-component-function-component';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost';

interface Props extends React.PropsWithChildren {
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  className?: string;
  variant?: Variant;
}

const enabledVariants: Record<Variant, string> = {
  primary:
    'bg-primary-dark text-white outline-black hover:bg-primary-main focus:bg-primary-main focus:outline-2',
  secondary:
    'bg-primary-light text-primary-dark outline-black hover:bg-primary-lighter focus:bg-primary-lighter focus:outline-2',
  tertiary: 'text-primary-dark underline hover:text-primary-main',
  ghost:
    'border border-primary-dark text-primary-dark outline-primary-main hover:border-primary-main hover:text-primary-main focus:border-primary-main focus:text-primary-main focus:underline focus:outline',
};

const disabledVariant: Record<Variant, string> = {
  primary: 'bg-grey-light text-grey-dark',
  secondary: 'bg-grey-light text-grey-dark',
  tertiary: 'text-grey-main',
  ghost: 'border border-grey-main text-grey-main',
};

export const Button: OverrideAbleComponentFunctionComponent<
  'button',
  Props
> = ({
  children,
  component: Component = 'button',
  endIcon,
  startIcon,
  variant = 'primary',
  className,
  ...componentProps
}) => {
  return (
    <Component
      className={clsx(
        className,
        'flex h-10 items-center rounded-lg px-4 text-base',
        !componentProps.disabled && enabledVariants[variant],
        componentProps.disabled && disabledVariant[variant]
      )}
      {...componentProps}
    >
      {startIcon && <span className="mr-3">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-3">{endIcon}</span>}
    </Component>
  );
};
