import { CssBaseline, ThemeProvider } from '@mui/material';
import local from '@next/font/local';
import { AppProps } from 'next/app';
import { Layout } from '../containers/layout';
import { PageService } from '../services/cms';
import { wrapper } from '../stores/redux';
import { setPages } from '../stores/redux/pages/slice';
import { makeTheme } from '../theme';

const roWebSans = local({
  src: [
    { path: '../theme/font/ROsanswebtextregular.woff', weight: 'normal' },
    { path: '../theme/font/ROsanswebtextitalic.woff', weight: 'normal', style: 'italic' },
    { path: '../theme/font/ROsanswebtextbold.woff', weight: 'bold' },
  ],
  fallback: ['Arial', 'Veranda', 'Times New Roman'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={makeTheme({ fontFamily: roWebSans.style.fontFamily })}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </ThemeProvider>
  );
};

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
  const pagesResponse = await PageService.getPages();

  store.dispatch(setPages(pagesResponse.data));

  return {
    pageProps: {
      ...(Component.getInitialProps?.({ ...ctx, store }) ?? {}),
    },
  };
});

export default wrapper.withRedux(App);
