import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfmPlugin from 'remark-gfm';
import { Typography } from './typography';
import { Link } from './link';
import NextLink from 'next/link';

interface Props {
  content: string;
}

export const RemoteMdx: React.FC<Props> = ({ content }) => {
  return (
    <MDXRemote
      source={content || ''}
      options={{ mdxOptions: { rehypePlugins: [remarkGfmPlugin] } }}
      components={{
        h1: (props) => <Typography variant="h1" {...(props as any)} />,
        h2: (props) => <Typography variant="h2" {...(props as any)} />,
        h3: (props) => <Typography variant="h3" {...(props as any)} />,
        p: (props) => <Typography variant="p" {...(props as any)} />,
        a: (props) => (
          <Link component={props.href?.startsWith('/') ? NextLink : 'a'} href={props.href || '#'} {...(props as any)} />
        ),
      }}
    />
  );
};
