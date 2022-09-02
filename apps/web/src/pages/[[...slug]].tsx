import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GetStaticPaths, GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps<Record<string, unknown>, { slug: string }> = async (ctx) => {
  const { slug = 'home' } = ctx.params || {};

  const pageResponse = await PageService.getPagesSlugSlug(slug);
  const content = pageResponse.data?.attributes?.content || '';

  return {
    props: {
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesResponse = await PageService.getPages();

  const paths =
    pagesResponse.data?.map((page) => ({
      params: { slug: [page.attributes?.slug || ''] },
    })) || [];

  return {
    paths,
    fallback: true,
  };
};

export default Home;
