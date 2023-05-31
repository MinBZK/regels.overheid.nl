import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getPages } from '@/services/cms/get-pages';
import localFont from 'next/font/local';

import '@/tailwind.css';

const RoSansWeb = localFont({
  src: [
    { path: '../../public/font/ROsanswebtextregular.woff', weight: 'normal' },
    { path: '../../public/font/ROsanswebtextitalic.woff', weight: 'normal', style: 'italic' },
    { path: '../../public/font/ROsanswebtextbold.woff', weight: 'bold' },
  ],
  fallback: ['Arial', 'Veranda', 'Times New Roman'],
  variable: '--font-sans',
});

export default async function Layout({ children }: React.PropsWithChildren) {
  const { data: pages } = await getPages();

  return (
    <html lang="nl">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={RoSansWeb.className}>
        <div className={`flex min-h-screen flex-col `}>
          <Navbar
            activeHref={'/'}
            items={pages.map(({ attributes: { name, slug } }) => ({
              href: slug === 'home' ? '/' : `/${slug}`,
              label: name,
            }))}
          />
          <div className="container pt-14 pb-8">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
