import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { GetStaticPaths, GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { PageService } from '../services/cms';

interface Props {
  content: string;
}

const Home: React.FC<Props> = ({ content }) => (
  <Box component="main" p={10}>
    {/*  eslint-disable-next-line react/no-children-prop */}
    <ReactMarkdown children={content} components={{ p: Typography }} />
  </Box>
);

export const getServerSideProps: GetServerSideProps<Record<string, unknown>, { slug: string }> = async (ctx) => {
  const { slug = 'home' } = ctx.params || {};

  const pageResponse = await PageService.getPagesSlugSlug(slug);
  const content = pageResponse.data?.attributes?.content || '';

  console.log({ pageResponse });

  return {
    props: {
      content,
    },
  };
};

export default Home;
