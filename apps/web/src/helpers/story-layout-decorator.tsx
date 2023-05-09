import { PagesContext } from '../components/pages-provider';
import { Layout } from '../containers/layout';
import { getPagesMock } from '../services/cms/mocks/get-pages-mock';

export const storyLayoutDecorator = (Story: any) => (
  <PagesContext.Provider value={{ pages: getPagesMock.data }}>
    <Layout>
      <Story />
    </Layout>
  </PagesContext.Provider>
);

export const storyLayoutDecorators = [storyLayoutDecorator];
