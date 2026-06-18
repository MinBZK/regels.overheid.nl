import { notFoundResponse } from '@/common/not-found-response';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ version?: string; publication: string }> },
) {
  const { publication, version = 'latest' } = await params;
  const publicationPath = path.resolve(process.cwd(), `public/public/publications/${publication}/${version}.html`);

  const publicationExists = await fs
    .access(publicationPath)
    .then(() => true)
    .catch(() => false);

  if (!publicationExists) return notFoundResponse(request);

  const buffer = await fs.readFile(publicationPath);

  return new Response(new Uint8Array(buffer), { headers: { 'Content-Type': 'text/html' } });
}
