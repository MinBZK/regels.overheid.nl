import { cx, cva, VariantProps } from '@/cva.config';
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
  TablerIconsProps,
} from '@tabler/icons-react';
import { PropsWithChildren } from 'react';

export interface NotificationProps extends VariantProps<typeof variants>, PropsWithChildren {
  className?: string;
}

const iconMapping: Record<Exclude<VariantProps<typeof variants>['severity'], undefined>, React.FC<TablerIconsProps>> = {
  info: IconInfoCircle,
  error: IconExclamationCircle,
  success: IconCircleCheck,
  warning: IconAlertTriangle,
};

const variants = cva({
  base: 'flex border-2 p-6 text-base',
  variants: {
    severity: {
      error: 'border-error-light bg-error-lighter',
      info: 'border-primary-light bg-primary-lighter',
      success: 'border-success-light bg-success-lighter',
      warning: 'border-warning-light bg-warning-lighter',
    },
  },
});

const variantIconVariant = cva({
  base: 'w-5 text-xs',
  variants: {
    severity: {
      error: 'text-error-dark',
      info: 'text-primary-dark',
      success: 'text-success-dark',
      warning: 'text-warning-dark',
    },
  },
});

export const Notification: React.OverrideAbleComponentFC<'div', NotificationProps> = ({
  children,
  className,
  severity = 'info',
  component: Component = 'div',
  ...componentProps
}) => {
  const Icon = iconMapping[severity];

  return (
    <Component className={cx(variants({ severity, className }))} {...componentProps}>
      <div className="w-8 shrink-0">
        <Icon className={cx(variantIconVariant({ severity }))} />
      </div>
      <div>{children}</div>
    </Component>
  );
};
