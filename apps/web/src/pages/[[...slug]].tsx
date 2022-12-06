import { Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { PageService } from '../services/cms';

interface Props {
  content: string;
}

const Home: React.FC<Props> = ({ content }) => <ReactMarkdown children={content} components={{ p: Typography }} />;

export const getServerSideProps: GetServerSideProps<Record<string, unknown>, { slug: string }> = async (ctx) => {
  const { slug = 'home' } = ctx.params || {};

  const pageResponse = await PageService.getPagesSlugSlug(slug);
  const content = pageResponse.data?.attributes?.content || '';

  return {
    props: {
      content,
    },
  };
};

export default Home;
