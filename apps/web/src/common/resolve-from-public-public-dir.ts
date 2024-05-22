import path from 'path';

/**
 * the "public public dir" is a mounted directory which is handy for files managed in production
 */
export function resolveFromPublicPublicDir(...paths: string[]) {
  return path.resolve(__dirname, process.cwd(), 'public/public/', ...paths);
}
