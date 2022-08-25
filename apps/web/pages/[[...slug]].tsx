import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { PageService } from "../services/cms";

interface Props {
  content: string;
}

const Home: React.FC<Props> = ({ content }) => (
  // eslint-disable-next-line react/no-children-prop
  <ReactMarkdown children={content} />
);

export const getStaticProps: GetStaticProps<any, { slug: string }> = async (
  ctx
) => {
  const { slug = "home" } = ctx.params || {};

  const pageResponse = await PageService.getPagesSlugSlug(slug);
  const content = pageResponse.data?.attributes?.content || "";

  return {
    props: {
      content: pageResponse.data?.attributes?.content || "",
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesResponse = await PageService.getPages();

  const paths =
    pagesResponse.data?.map((page) => ({
      params: { slug: [page.attributes?.slug || ""] },
    })) || [];

  return {
    paths,
    fallback: true,
  };
};

export default Home;
