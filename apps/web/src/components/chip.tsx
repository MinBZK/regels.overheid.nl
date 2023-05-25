import { clsx } from 'clsx';

export type ChipVariant = 'warning' | 'info' | 'error' | 'success';

interface Props {
  label: string;
  disabled?: boolean;
  className?: string;
  variant?: ChipVariant;
}

const variantMapping: Record<ChipVariant, string> = {
  info: 'text-primary-main bg-primary-lighter',
  warning: 'text-warning-main bg-warning-lighter',
  error: 'text-error-main bg-error-lighter',
  success: 'text-success-main bg-success-lighter',
};

export const Chip: React.FC<Props> = ({ disabled, label, className, variant = 'info' }) => {
  return (
    <span
      className={clsx(
        'px-2 py-1  text-xs font-bold rounded mt-auto',
        !disabled && variantMapping[variant],
        disabled && 'bg-gray-lighter text-grey-main',
        className
      )}
    >
      {label}
    </span>
  );
};
