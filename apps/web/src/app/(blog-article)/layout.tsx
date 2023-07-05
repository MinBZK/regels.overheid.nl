import { Breadcrumbs } from './breadcrumbs';

export default async function CommonPageLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Breadcrumbs />
      <div className="pt-14 pb-8">{children}</div>
    </>
  );
}
