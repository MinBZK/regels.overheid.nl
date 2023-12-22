import NextLink from 'next/link';

export const Link: React.OverrideAbleComponentFC<typeof NextLink, React.PropsWithChildren> = ({
  component: Component = NextLink,
  children,
  href,
  ...componentProps
}) => {
  return (
    <Component href={href} className="text-primary-dark hover:text-primary-main hover:underline" {...componentProps}>
      {children}
    </Component>
  );
};
