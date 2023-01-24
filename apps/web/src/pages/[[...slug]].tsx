import { Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { PageService } from '../services/cms';

interface Props {
  name: string;
  content: string;
}

const Home: React.FC<Props> = ({ content, name }) => (
  <>
    <Head>
      <title>{`Regelregister van de Nederlandse Overheid - ${name}`}</title>
    </Head>
    {/*  eslint-disable-next-line react/no-children-prop */}
    <ReactMarkdown children={content} components={{ p: Typography }} />
  </>
);

export const getServerSideProps: GetServerSideProps<Record<string, unknown>, { slug: string }> = async (ctx) => {
  const { slug = 'home' } = ctx.params || {};

  const pageResponse = await PageService.getPagesSlugSlug(slug);

  const name = pageResponse.data?.attributes?.name;
  const content = pageResponse.data?.attributes?.content || '';

  return {
    props: {
      name,
      content,
    },
  };
};

export default Home;
