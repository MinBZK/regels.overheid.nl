import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkGfmPlugin from 'remark-gfm';
import { LinkRemoteMdx } from './link-remote-mdx';
import { Typography } from './typography';

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
        blockquote: (props) => (
          <blockquote className="mt-4 border-l-4 border-primary-light pl-4 italic text-gray-700" {...props} />
        ),
        ...components,
      }}
      {...props}
    />
  );
};
