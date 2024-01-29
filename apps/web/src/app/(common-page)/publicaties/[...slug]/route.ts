import fs from 'fs/promises';
import path from 'path';

export async function GET(request: Request) {
  const enhancedUrl = new URL(request.url);

  const [, , publication, version = 'latest'] = enhancedUrl.pathname.split('/');

  const publicationPath = path.resolve(process.cwd(), `public/public/publications/${publication}/${version}.html`);

  const publicationExists = await fs
    .access(publicationPath)
    .then(() => true)
    .catch(() => false);

  if (!publicationExists) {
    const url = new URL('/404', request.url);
    const response = await fetch(url.toString());

    return new Response(response.body);
  }

  const buffer = await fs.readFile(publicationPath);

  return new Response(buffer);
}
