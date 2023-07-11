import {
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
  TablerIconsProps,
} from '@tabler/icons-react';
import clsx from 'clsx';

type Severity = 'info' | 'success' | 'warning' | 'error';

interface NotificationProps extends React.PropsWithChildren {
  severity: Severity;
  className?: string;
}

interface IconMappingProps {
  severity: Severity;
  className: string;
}

const notificationVariantsMapping: Record<Severity, string> = {
  error: 'bg-error-lighter border-error-light',
  info: 'bg-primary-lighter border-primary-light',
  success: 'bg-success-lighter border-success-light',
  warning: 'bg-warning-lighter border-warning-light',
};

const iconVariantsMapping: Record<Severity, string> = {
  error: 'text-error-dark',
  info: 'text-primary-dark',
  success: 'text-success-dark',
  warning: 'text-warning-dark',
};

const iconMapping: Record<Severity, React.FC<TablerIconsProps>> = {
  info: IconInfoCircle,
  error: IconExclamationCircle,
  success: IconCircleCheck,
  warning: IconAlertTriangle,
};

const IconMapping: React.FC<IconMappingProps> = ({ severity, className }) => {
  const Icon = iconMapping[severity];

  return <Icon size={16} className={className} />;
};

export const Notification: React.FC<NotificationProps> = ({ severity = 'info', children, className }) => (
  <div className={clsx(className, notificationVariantsMapping[severity], '$ flex border-2 p-6 text-base')}>
    <div className="w-8 shrink-0">
      <IconMapping severity={severity} className={`${iconVariantsMapping[severity]} mt-1 text-xs`} />
    </div>
    <div>{children}</div>
  </div>
);
