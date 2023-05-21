import {
  IconAlertTriangle,
  IconCircleCheck,
  IconExclamationCircle,
  IconInfoCircle,
  TablerIconsProps,
} from '@tabler/icons-react';

type Severity = 'info' | 'success' | 'warning' | 'error';

interface NotificationProps extends React.PropsWithChildren {
  severity: Severity;
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

export const Notification: React.FC<NotificationProps> = ({ severity = 'info', children }) => (
  <div className={`${notificationVariantsMapping[severity]} p-6 border-2 text-base flex gap-x-8`}>
    <IconMapping severity={severity} className={`${iconVariantsMapping[severity]} text-xs mt-1 w-8 shrink-0`} />
    <div>{children}</div>
  </div>
);
