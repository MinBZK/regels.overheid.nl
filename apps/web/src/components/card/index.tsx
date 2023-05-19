import { clsx } from 'clsx';

interface Props extends React.PropsWithChildren {
  disabled?: boolean;
  className?: string;
  component?: React.ElementType;
}

export const Card: React.FC<Props> = ({ children, component, disabled, className = '' }) => {
  const Component = component || 'div';

  return (
    <Component
      className={clsx(
        'rounded-lg px-3 py-4',
        disabled && 'bg-grey-lighter',
        !disabled && 'border-b border-r border-grey-lighter',
        className
      )}
    >
      {children}
    </Component>
  );
};
