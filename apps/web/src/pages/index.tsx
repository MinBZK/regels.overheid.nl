import { getPageBySlug } from '@/services/cms/get-page-by-slug';
import { Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

interface Props {
  name: string;
  content: string;
}

const Home: React.FC<Props> = ({ name, content }) => {
  return (
    <>
      <Head>
        <title>{`Regelregister van de Nederlandse Overheid - ${name}`}</title>
      </Head>
      {/*  eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={content} components={{ p: Typography }} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Record<string, unknown>, { slug: string }> = async (ctx) => {
  const { slug = 'home' } = ctx.params || {};
  const page = await getPageBySlug(slug)
    .then((res) => res.data?.attributes)
    .catch(() => null);

  if (page?.cmsPage === false || page == null)
    return {
      notFound: true,
    };

  const name = page?.name || '';
  const content = page?.content || '';

  return {
    props: {
      name,
      content,
    },
  };
};

export default Home;
