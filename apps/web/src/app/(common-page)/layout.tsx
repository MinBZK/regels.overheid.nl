import { getPages } from '@/prisma/get-pages';
import { Breadcrumbs } from './breadcrumbs';

export const revalidate = 3600;

export default async function CommonPageLayout({ children }: React.PropsWithChildren) {
  const pages = await getPages();

  return (
    <>
      <Breadcrumbs pages={pages} />
      <main className="pb-8 pt-14">{children}</main>
    </>
  );
}
