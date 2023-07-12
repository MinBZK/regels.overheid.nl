import { getPageBySlug } from '@/prisma/get-page-by-slug';
import { RemoteMdx } from './remote-mdx';

interface Props {
  page: string;
}

export const RemotePage: React.FC<Props> = async ({ page: slug }) => {
  const page = await getPageBySlug(slug);

  if (!page) return null;

  return <RemoteMdx content={page.content} />;
};
