import clsx from 'clsx';

type TypographyVariantTypes = 'page-title' | 'h1' | 'h2' | 'h3' | 'p' | 'large';

type TypographyVariant = [component: React.ElementType, classNames: string];

const typographyVariantMapping: Record<TypographyVariantTypes, TypographyVariant> = {
  'page-title': ['h1', 'text-5xl mb-6'],
  h1: ['h1', 'text-primary-dark text-4xl sm:text-5xl font-bold my-6'],
  h2: ['h2', 'text-primary-dark text-3xl sm:text-4xl font-bold my-4'],
  h3: ['h3', 'text-primary-dark text-2xl font-bold my-3'],
  p: ['p', 'text-lg font-normal my-3'],
  large: ['p', 'text-xl my-4 font-bold text-black'],
};

interface Props extends React.PropsWithChildren {
  variant?: TypographyVariantTypes;
  className?: string;
}

export const Typography: React.OverrideAbleComponentFC<'p', Props> = ({
  children,
  className,
  variant = 'p',
  component,
}) => {
  const [defaultComponent, defaultClassName] = typographyVariantMapping[variant];
  const Component = component ?? defaultComponent;

  return <Component className={clsx(className, defaultClassName)}>{children}</Component>;
};
