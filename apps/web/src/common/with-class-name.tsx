import { cx } from '@/cva.config';

type ComponentType<P = {}> = React.ComponentType<P & { className?: string }>;

export const withClassName = <P extends { className?: string }>(
  Component: ComponentType<P>,
  className: string | string[],
) => {
  const clone = (props: P) => <Component {...props} className={cx(className, props.className)} />;

  if (Component.displayName) clone.displayName = Component.displayName;

  return clone;
};
