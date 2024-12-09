import { resolveCmsImage } from '@/common/resolve-cms-image';
import { db } from '@/drizzle/db';
import { files, filesRelatedMorphs, terms } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest, { params }: { params: { slug: string[] } }) {
  const slug = '/' + params.slug.join('/');

  const extension = (() => {
    if (!path.extname(slug)) return '.json';

    const extensions = ['json', 'rdf', 'ttl'];

    const extension = extensions.find((value) => slug.endsWith('.' + value));

    if (extension) return '.' + extension;

    const accepts = req.headers.get('accept');

    if (accepts?.includes('application/rdf+xml')) return '.rdf';

    if (accepts?.includes('text/turtle')) return '.ttl';

    if (accepts?.includes('application/json')) return '.json';
  })();

  if (!extension) return new Response('Not found', { status: 404 });

  const pureSlug = path.join(path.dirname(slug), path.basename(slug, path.extname(slug)));

  const [term] = await db
    .select()
    .from(terms)
    .leftJoin(
      filesRelatedMorphs,
      and(eq(terms.id, filesRelatedMorphs.relatedId), eq(filesRelatedMorphs.relatedType, 'api::term.term'))
    )
    .leftJoin(files, and(eq(files.id, filesRelatedMorphs.fileId), eq(files.ext, extension)))
    .where(eq(terms.slug, pureSlug))
    .limit(1);

  const fetchResponse = await fetch(resolveCmsImage(term.files as any), {
    method: 'GET',
  });

  const headers = new Headers();

  if (extension === '.ttl') headers.set('content-type', 'text/turtle');

  if (extension === '.json') headers.set('content-type', 'application/json');

  if (extension === '.rdf') headers.set('content-type', 'application/rdf+xml');

  return new Response(fetchResponse.body, {
    headers,
    status: fetchResponse.status,
  });
}
