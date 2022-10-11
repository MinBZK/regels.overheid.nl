import { AppProps } from 'next/app';
import { Layout } from '../containers/layout';
import { PageService } from '../services/cms';
import { wrapper } from '../stores/redux';
import '@nl-rvo/assets/fonts/index.css';
import '@nl-rvo/design-tokens/dist/index.css';
import '../containers/theme.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="rvo-theme">
      <div className="minbzk-theme">
    <Layout>
      <Component {...pageProps} />
    </Layout>
      </div>
    </div>
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
