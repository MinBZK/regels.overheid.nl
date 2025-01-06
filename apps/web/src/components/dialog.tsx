export * from '@radix-ui/react-dialog';
import * as Dialog from '@radix-ui/react-dialog';
import { withClassName } from '@/common/with-class-name';
import { IconX } from '@tabler/icons-react';
import { cx } from '@/cva.config';

export const Portal: React.FC<Dialog.DialogPortalProps> = ({ children, ...props }) => {
  return (
    <Dialog.Portal {...props}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">{children}</div>;
    </Dialog.Portal>
  );
};

export const Content: React.FC<Dialog.DialogContentProps> = ({ children, className, ...props }) => {
  return (
    <Dialog.Content
      className={cx('relative w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-lg', className)}
      {...props}
    >
      <Dialog.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
        <IconX className="h-4 w-4" />
        <span className="sr-only">Sluiten</span>
      </Dialog.Close>
      {children}
    </Dialog.Content>
  );
};

export const Title = withClassName(Dialog.Title, 'text-lg font-semibold text-gray-900 mb-4');
