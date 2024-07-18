import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import NextLink from 'next/link';
import remarkGfmPlugin from 'remark-gfm';
import { Link } from './link';
import { Typography } from './typography';
import { LinkRemoteMdx } from './link-remote-mdx';

interface Props extends Omit<MDXRemoteProps, 'source'> {
  content: string;
}

export const RemoteMdx: React.FC<Props> = ({ content, components, ...props }) => {
  return (
    <MDXRemote
      source={content || ''}
      options={{ mdxOptions: { rehypePlugins: [remarkGfmPlugin] } }}
      components={{
        a: LinkRemoteMdx,
        h1: (props) => <Typography variant="h1" {...(props as any)} />,
        h2: (props) => <Typography variant="h2" {...(props as any)} />,
        h3: (props) => <Typography variant="h3" {...(props as any)} />,
        p: (props) => <Typography variant="p" {...(props as any)} />,
        ol: (props) => <ol className="list-decimal pl-7 text-lg" {...(props as any)} />,
        ul: (props) => <ul className="list-disc pl-7 text-lg" {...(props as any)} />,
        ...components,
      }}
      {...props}
    />
  );
};
