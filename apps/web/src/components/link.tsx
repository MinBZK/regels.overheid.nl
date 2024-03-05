import { cx } from '@/cva.config';
import NextLink from 'next/link';

export const Link: React.OverrideAbleComponentFC<typeof NextLink, React.PropsWithChildren> = ({
  component: Component = NextLink,
  children,
  href,
  className,
  ...componentProps
}) => {
  return (
    <Component
      href={href}
      className={cx('text-primary-dark hover:text-primary-main hover:underline', className)}
      {...componentProps}
    >
      {children}
    </Component>
  );
};
