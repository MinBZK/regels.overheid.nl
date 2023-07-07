import { makeServiceBuilder } from './make-service-builder';
import { BlogArticle } from './models/blog-article';

const builder = makeServiceBuilder<BlogArticle, 'singular'>();

interface Args {
  id: number;
}

export const getBlogArticle = builder('blog-articles', {
  populateMediaFields: ['cover'],
  urlBuilder({ id }: Args) {
    return `blog-articles/${id}`;
  },
});
