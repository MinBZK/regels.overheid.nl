import path from 'path';

export function getSlugFromParams(param: string[]) {
  const slug = '/' + param.join('/');

  return path.join(path.dirname(slug), path.basename(slug, path.extname(slug)));
}
