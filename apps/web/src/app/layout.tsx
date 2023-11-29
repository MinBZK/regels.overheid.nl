import { getPages } from '@/services/cms/get-pages';
import '@total-typescript/ts-reset';
import localFont from 'next/font/local';
import { Footer } from './footer';
import './globals.css';
import { Navbar } from './navbar';

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pages = await getPages();

  return (
    <html lang="nl">
      <body className={`${RoSansWeb.className} flex min-h-screen flex-col`}>
        <Navbar pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
