import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  bleed?: boolean;
  className?: string;
}

export const Container: React.OverrideAbleComponentFC<'div', Props> = ({
  component: Component = 'div',
  bleed,
  children,
  className,
  ...componentProps
}) => {
  return (
    <Component className={clsx(className, 'container', !bleed && 'xl:max-w-[814px]')} {...componentProps}>
      {children}
    </Component>
  );
};
