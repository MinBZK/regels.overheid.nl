type Variant = 'contained' | 'text';

interface Props extends React.PropsWithChildren {
  href?: string;
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  component?: React.ElementType;
  variant?: Variant;
}

const buttonVariantMap: Record<Variant, string> = {
  text: 'bg-transparent text-primary-dark hover:text-primary-main focus:underline',
  contained: 'bg-primary-main text-white hover:bg-primary-dark',
};

export const Button: React.FC<Props> = ({
  children,
  component: Component = 'button',
  endIcon,
  href,
  startIcon,
  variant = 'contained',
}) => {
  return (
    <Component
      href={href}
      className={`h-10 px-4 flex items-center rounded-lg text-base font-bold ${buttonVariantMap[variant]} `}
    >
      {startIcon && <span className="mr-3">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-3">{endIcon}</span>}
    </Component>
  );
};
