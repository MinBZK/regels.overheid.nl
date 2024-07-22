import { IconFile, IconFileTypePdf } from '@tabler/icons-react';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const LinkFile: React.FC<Props> = ({ children, ...props }) => {
  const fileType = children?.toString().split('.').at(-1);

  return (
    <a className="flex h-10 items-center gap-x-2 rounded-lg border px-4" {...props}>
      {fileType === 'pdf' ? <IconFileTypePdf /> : <IconFile />}
      {children}
    </a>
  );
};
