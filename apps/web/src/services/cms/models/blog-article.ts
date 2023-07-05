import { Timestamps } from './timestamps';

export interface BlogArticle extends Timestamps {
  title: string;
  content: string;
  category: string;
}
