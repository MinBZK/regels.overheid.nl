import { PagesContext } from '@/components/pages-provider';
import { Layout } from '@/containers/layout';
import { getPages } from '@/services/cms/get-pages';
import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import '@total-typescript/ts-reset';

const App = ({ Component, pageProps }: AppProps) => {
  const { pages, ...componentProps } = pageProps;

  return (
    <PagesContext.Provider value={{ pages }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...componentProps}></Component>
        </Layout>
      </ThemeProvider>
    </PagesContext.Provider>
  );
};

App.getInitialProps = async () => {
  const pages = await getPages().then((res) => res.data);

  return { pageProps: { pages } };
};

export default App;
