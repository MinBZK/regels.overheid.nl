import { OverrideAbleComponentFunctionComponent } from '@/helpers/override-able-component-function-component';
import { clsx } from 'clsx';

interface Props extends React.PropsWithChildren {
  className?: string;
  bleed?: boolean;
}

export const Container: OverrideAbleComponentFunctionComponent<'div', Props> = ({
  component: Component = 'div',
  children,
  bleed,
  className,
}) => {
  return <Component className={clsx('container', !bleed && 'xl:max-w-[760px]', className)}>{children}</Component>;
};
