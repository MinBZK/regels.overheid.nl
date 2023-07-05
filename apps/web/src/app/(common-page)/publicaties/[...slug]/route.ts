import fs from 'fs/promises';
import { notFound } from 'next/navigation';

export async function GET(request: Request) {
  const enhancedUrl = new URL(request.url);

  const [, , publication, version = 'latest'] = enhancedUrl.pathname.split('/');

  const publicationPath = `public/public/publications/${publication}/${version}.html`;

  const publicationExists = await fs
    .access(publicationPath)
    .then(() => true)
    .catch(() => false);

  if (!publicationExists) notFound();

  const buffer = await fs.readFile(publicationPath);

  return new Response(buffer);
}
