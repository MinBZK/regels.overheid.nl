import { Footer } from '@/components/footer';
import '@/tailwind.css';
import localFont from 'next/font/local';
import { Navbar } from './navbar';

const RoSansWeb = localFont({
  src: [
    { path: '../../public/font/ROsanswebtextregular.woff', weight: 'normal' },
    { path: '../../public/font/ROsanswebtextitalic.woff', weight: 'normal', style: 'italic' },
    { path: '../../public/font/ROsanswebtextbold.woff', weight: 'bold' },
  ],
  fallback: ['Arial', 'Veranda', 'Times New Roman'],
  variable: '--font-sans',
});

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={RoSansWeb.className}>
        <div className={`flex min-h-screen flex-col `}>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
