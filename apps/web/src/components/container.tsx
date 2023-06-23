import { clsx } from 'clsx';

interface Props extends React.PropsWithChildren {
  className?: string;
  bleed?: boolean;
}

export const Container: React.FC<Props> = ({ children, bleed, className }) => {
  return <div className={clsx('container', !bleed && 'xl:max-w-[760px]', className)}>{children}</div>;
};
