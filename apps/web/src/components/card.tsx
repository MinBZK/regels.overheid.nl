import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, React.OverrideProps<Props & { component: any }, 'div'>>(
  ({ children, className, component: Component = 'div', ...componentProps }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(className, 'rounded-lg border border-grey-lighter px-3 py-4')}
        {...componentProps}
      >
        {children}
      </Component>
    );
  }
) as React.OverrideAbleComponentFC<'div', Props>;

Card.displayName = 'Card';
