import clsx from 'clsx';

export type PillVariant = 'warning' | 'info' | 'error' | 'success';

interface Props {
  label: string;
  disabled?: boolean;
  className?: string;
  variant?: PillVariant;
}

const variantMapping: Record<PillVariant, string> = {
  info: 'text-primary-main bg-primary-lighter',
  warning: 'text-warning-main bg-warning-lighter',
  error: 'text-error-main bg-error-lighter',
  success: 'text-success-main bg-success-lighter',
};

export const Pill: React.FC<Props> = ({ disabled, label, className, variant = 'info' }) => {
  return (
    <span
      className={clsx(
        'mt-auto rounded  px-2 py-1 text-xs font-bold',
        !disabled && variantMapping[variant],
        disabled && 'bg-gray-lighter text-grey-main',
        className
      )}
    >
      {label}
    </span>
  );
};
