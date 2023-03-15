import { ApplicationMetadataContext } from '@/components/application-metadata-provider';
import { PagesContext } from '@/components/pages-provider';
import { Layout } from '@/containers/layout';
import { ApplicationMetadata, getApplicationMetadata } from '@/services/cms/get-application-metadata';
import { getPages, Page } from '@/services/cms/get-pages';
import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@total-typescript/ts-reset';
import { AppProps } from 'next/app';

interface PageProps {
  pages: Page[];
  applicationMetadata?: ApplicationMetadata;
}

const App = ({ Component, pageProps }: Omit<AppProps, 'pageProps'> & { pageProps: PageProps }) => {
  const { pages, applicationMetadata, ...componentProps } = pageProps;

  return (
    <PagesContext.Provider value={{ pages }}>
      <ApplicationMetadataContext.Provider value={{ data: applicationMetadata?.attributes }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...componentProps}></Component>
          </Layout>
        </ThemeProvider>
      </ApplicationMetadataContext.Provider>
    </PagesContext.Provider>
  );
};

App.getInitialProps = async (): Promise<{ pageProps: PageProps }> => {
  const pages = await getPages().then((res) => res.data);
  const applicationMetadata = await getApplicationMetadata()
    .then((res) => res.data)
    .catch(() => undefined);

  return { pageProps: { pages, applicationMetadata } };
};

export default App;
