import { cx } from '@/cva.config';
import NextLink from 'next/link';
import { forwardRef } from 'react';

export const Link = forwardRef<typeof NextLink, React.OverrideProps<{} & { component?: any }, typeof NextLink>>(
  ({ component: Component = NextLink, href, className, children, ...componentProps }, ref) => {
    return (
      <Component
        href={href}
        className={cx('text-primary-dark underline hover:text-primary-main', className)}
        ref={ref}
        {...componentProps}
      >
        {children}
      </Component>
    );
  }
);

Link.displayName = 'Link';
