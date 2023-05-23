import { clsx } from 'clsx';

interface Props {
  label: string;
  disabled?: boolean;
  className?: string;
}

export const Chip: React.FC<Props> = ({ disabled, label, className }) => {
  return (
    <span
      className={clsx(
        'px-2 py-1  text-xs font-bold rounded mt-auto',
        !disabled && 'text-primary-main bg-primary-lighter',
        disabled && 'bg-gray-lighter text-grey-main',
        className
      )}
    >
      {label}
    </span>
  );
};
