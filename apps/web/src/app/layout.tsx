import '@total-typescript/ts-reset';
import localFont from 'next/font/local';
import { Footer } from './footer';
import './globals.css';
import { Header } from './header';
import { MenuBreadcrumbsProvider } from './menu-breadcrumbs';

const RoSansWeb = localFont({
  src: [
    { path: './fonts/ROsanswebtextregular.woff', weight: 'normal' },
    {
      path: './fonts/ROsanswebtextitalic.woff',
      weight: 'normal',
      style: 'italic',
    },
    { path: './fonts/ROsanswebtextbold.woff', weight: 'bold' },
  ],
  fallback: ['Arial', 'Veranda', 'Times New Roman'],
  variable: '--font-sans',
});

export const revalidate = 300;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${RoSansWeb.className} flex min-h-screen min-w-full flex-col`}>
        <MenuBreadcrumbsProvider>
          <Header />
          <main className="pb-8 pt-14">{children}</main>
          <Footer />
        </MenuBreadcrumbsProvider>
      </body>
    </html>
  );
}
