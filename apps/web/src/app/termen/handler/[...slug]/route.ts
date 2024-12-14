import { resolveCmsImage } from '@/common/resolve-cms-image';
import { db } from '@/drizzle/db';
import { files, filesRelatedMorphs, terms } from '@/drizzle/schema';
import { and, eq, param } from 'drizzle-orm';
import { NextRequest } from 'next/server';
import path from 'path';
import { getSlugFromParams } from '../../get-slug-from-params';
import { findTermInFormat, FindTermInFormatArgs } from '../../find-term-in-format';
import { getHeadersWithContentTypes } from '../../get-headers-with-content-type';

export async function GET(req: NextRequest, { params }: { params: { slug: string[] } }) {
  const slug = getSlugFromParams(params.slug);

  const extension = ((): FindTermInFormatArgs['extension'] | null => {
    const accepts = req.headers.get('accept');

    if (accepts?.includes('application/rdf+xml')) return '.rdf';

    if (accepts?.includes('text/turtle')) return '.ttl';

    if (accepts?.includes('application/json')) return '.json';

    return null;
  })();

  if (!extension) return new Response('Not found', { status: 404 });

  const term = await findTermInFormat({ slug, extension });

  const fetchResponse = await fetch(resolveCmsImage(term.files as any), {
    method: 'GET',
  });

  const headers = getHeadersWithContentTypes(extension);

  return new Response(fetchResponse.body, {
    headers,
    status: fetchResponse.status,
  });
}
