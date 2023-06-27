import { OverrideAbleComponentFunctionComponent } from '@/helpers/override-able-component-function-component';
import NextLink from 'next/link';

export const Link: OverrideAbleComponentFunctionComponent<typeof NextLink, React.PropsWithChildren> = ({
  component: Component = NextLink,
  children,
  href,
  ...props
}) => {
  return (
    <Component href={href} className="text-primary-dark hover:underline hover:text-primary-main" {...props}>
      {children}
    </Component>
  );
};
