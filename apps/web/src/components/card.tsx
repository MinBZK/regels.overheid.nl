import { clsx } from 'clsx';
import { OverrideAbleComponentFunctionComponent } from './override-able-component-function-component';

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const Card: OverrideAbleComponentFunctionComponent<'div', Props> = ({
  children,
  className,
  component: Component = 'div',
  ...componentProps
}) => {
  return (
    <Component
      className={clsx(
        className,
        'rounded-lg border-b border-r border-grey-lighter px-3 py-4'
      )}
      {...componentProps}
    >
      {children}
    </Component>
  );
};
