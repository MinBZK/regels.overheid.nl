import NextLink from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { Link } from './link';
import { LinkFile } from './link-file';

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const fileExtensions = ['pdf'];

export const LinkRemoteMdx: React.FC<Props> = async (props) => {
  try {
    const enhancedURL = new URL('', props.href);
    const cmsURL = new URL('', process.env.NEXT_PUBLIC_CMS_URL);

    const extension = props.children?.toString().split('.').at(-1);

    const isSameOrigin = enhancedURL.origin === cmsURL.origin;
    const isFile = fileExtensions.includes(extension || '');

    if (isSameOrigin && isFile) return <LinkFile {...props} />;
  } finally {
    return (
      <Link component={props.href?.startsWith('/') ? NextLink : 'a'} href={props.href || '#'} {...(props as any)} />
    );
  }
};
