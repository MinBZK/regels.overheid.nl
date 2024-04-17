import { cx } from '@/cva.config';
import { forwardRef } from 'react';

type ComponentType<P = {}> = React.ComponentType<P & { className?: string }>;

export const withClassName = <P extends {}>(Component: ComponentType<P>, className: string | string[]) => {
  const clone = forwardRef((props: P & { className?: string }, ref) => {
    return <Component ref={ref} {...props} className={cx(className, props.className)} />;
  });

  if (Component.displayName) clone.displayName = Component.displayName;

  return clone;
};
