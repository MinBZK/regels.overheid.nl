import { clsx } from 'clsx';

type TypographyVariantTypes = 'page-title';

type TypographyVariant = [component: React.ElementType, classNames: string];

const typographyVariantMapping: Record<TypographyVariantTypes, TypographyVariant> = {
  'page-title': ['h1', 'text-5xl mb-6 font-bold text-primary-dark'],
};

interface Props extends React.PropsWithChildren {
  variant: TypographyVariantTypes;
  component?: React.ElementType;
  className?: string;
}

export const Typography: React.FC<Props> = ({ children, component, className, variant }) => {
  const [defaultComponent, defaultClassName] = typographyVariantMapping[variant];
  const Component = component || defaultComponent;

  return <Component className={`${defaultClassName} ${clsx(className)}`}>{children}</Component>;
};
