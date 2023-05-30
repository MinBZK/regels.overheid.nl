import { OverrideAbleComponentFunctionComponent } from '@/helpers/override-able-component-function-component';
import { clsx } from 'clsx';

interface Props extends React.PropsWithChildren {
  disabled?: boolean;
  className?: string;
}

export const Card: OverrideAbleComponentFunctionComponent<'div', Props> = ({
  children,
  disabled,
  className = '',
  component: Component = 'div',
  ...htmlComponentProps
}) => {
  return (
    <Component
      className={clsx(
        'rounded-lg px-3 py-4',
        disabled && 'bg-grey-lighter',
        !disabled && 'border-b border-r border-grey-lighter',
        className
      )}
      {...htmlComponentProps}
    >
      {children}
    </Component>
  );
};
