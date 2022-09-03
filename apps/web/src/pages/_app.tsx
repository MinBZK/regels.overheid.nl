import { AppProps } from 'next/app';
import { Layout } from '../containers/layout';
import { PageService } from '../services/cms';
import { wrapper } from '../stores/redux';
import { setPages } from '../stores/redux/pages/slice';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
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
