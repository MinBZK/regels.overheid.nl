import { getPages } from '@/prisma/get-pages';
import { Breadcrumbs } from './breadcrumbs';

export const revalidate = 300;

export default async function CommonPageLayout({ children }: React.PropsWithChildren) {
  const pages = await getPages();

  return (
    <>
      <Breadcrumbs pages={pages} />
      <main className="pb-8 pt-14">{children}</main>
    </>
  );
}
