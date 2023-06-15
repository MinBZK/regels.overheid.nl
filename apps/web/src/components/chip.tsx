import { clsx } from 'clsx';

type ChipVariant = 'outline' | 'filled';

interface Props {
  label: string;
  disabled?: boolean;
  className?: string;
  variant?: ChipVariant;
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
}

const variantMapping: Record<ChipVariant, string> = {
  outline: 'text-primary-dark border-primary-dark hover:bg-primary-light focus-visible:bg-primary-light',
  filled: 'bg-primary-lighter hover:bg-primary-light focus-visible:bg-primary-light border-transparent',
};

const disabledVariantMapping: Record<ChipVariant, string> = {
  outline: 'border border-grey-light',
  filled: 'bg-grey-lighter',
};

export const Chip: React.FC<Props> = ({ label, variant = 'filled', disabled = false, onClick, className }) => {
  return (
    <button
      className={clsx(
        'h-8 rounded text-base font-bold px-4 inline-flex items-center cursor-pointer transition-colors focus-visible:outline outline-primary-dark outline-2 border',
        !disabled && 'text-primary-dark',
        !disabled && variantMapping[variant],
        disabled && 'text-grey-main cursor-default',
        disabled && disabledVariantMapping[variant],
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
