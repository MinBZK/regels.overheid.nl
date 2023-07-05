import { makeServiceBuilder } from './make-service-builder';
import { BlogArticle } from './models/blog-article';

const builder = makeServiceBuilder<BlogArticle, 'collection'>();

export const getBlogArticles = builder('blog-articles', {
  defaultFields: ['title', 'category', 'createdAt', 'updatedAt', 'publishedAt'],
  populateMediaFields: ['cover'],
});
