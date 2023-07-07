import { OverrideAbleComponentFunctionComponent } from '@/helpers/override-able-component-function-component';
import { clsx } from 'clsx';

type Variant = 'contained' | 'text';

interface Props extends React.PropsWithChildren {
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
}

const buttonVariantMap: Record<Variant, string> = {
  text: 'bg-transparent text-primary-dark hover:text-primary-main focus:underline',
  contained: 'bg-primary-main text-white hover:bg-primary-dark',
};

const disabledButtonVariantMap: Record<Variant, string> = {
  contained: 'bg-grey-light text-grey-dark',
  text: 'bg-transparent text-grey-main',
};

export const Button: OverrideAbleComponentFunctionComponent<'button', Props> = ({
  children,
  component: Component = 'button',
  endIcon,
  startIcon,
  variant = 'contained',
  className,
  disabled,
  ...htmlProps
}) => {
  return (
    <Component
      className={clsx(
        'h-10 px-4 flex items-center rounded-lg text-base font-bold',
        !disabled && buttonVariantMap[variant],
        disabled && disabledButtonVariantMap[variant],
        className
      )}
      {...htmlProps}
      onClick={disabled === false ? htmlProps?.onClick : undefined}
    >
      {startIcon && <span className="mr-3">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-3">{endIcon}</span>}
    </Component>
  );
};
