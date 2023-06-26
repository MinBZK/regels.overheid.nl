import { OverrideAbleComponentFunctionComponent } from '@/helpers/override-able-component-function-component';

interface Props extends React.PropsWithChildren {
  className: string;
}

export const CommonOverrideAbleComponent: OverrideAbleComponentFunctionComponent<'div', Props> = ({
  children,
  className,
  component: Component = 'div',
  ...htmlProps
}) => (
  <Component className={className} {...htmlProps}>
    {children}
  </Component>
);
