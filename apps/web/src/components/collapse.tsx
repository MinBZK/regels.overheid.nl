import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
  in: boolean;
  className?: string;
}

export const Collapse: React.FC<Props> = ({ children, in: _in, className }) => {
  return (
    <div className={clsx(`grid  transition-all`, _in && 'grid-rows-[1fr]', !_in && 'grid-rows-[0fr]', className)}>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};
