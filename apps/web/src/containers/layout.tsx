import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { usePagesContext } from '@/components/pages-provider';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { pages } = usePagesContext();

  return (
    <Stack minHeight="100vh" direction="column">
      <Navbar
        activeHref={router.pathname}
        items={pages.map(({ attributes: { name, slug } }) => ({
          href: slug === 'home' ? '/' : `/${slug}`,
          label: name,
        }))}
      />
      <div className="container pt-14 pb-8">{children}</div>
      <Footer />
    </Stack>
  );
};
