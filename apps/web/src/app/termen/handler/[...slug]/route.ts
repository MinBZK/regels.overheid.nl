import { NextRequest } from 'next/server';
import { findTermInFormat, FindTermInFormatArgs } from '../../find-term-in-format';
import { getHeadersWithContentTypes } from '../../get-headers-with-content-type';
import { getSlugFromParams } from '../../get-slug-from-params';
import { notFoundResponse } from '@/common/not-found-response';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugParam } = await params;
  const slug = getSlugFromParams(slugParam);

  const extension = ((): FindTermInFormatArgs['extension'] | null => {
    const accepts = req.headers.get('accept');

    if (accepts?.includes('application/rdf+xml')) return '.rdf';

    if (accepts?.includes('text/turtle')) return '.ttl';

    if (accepts?.includes('application/json')) return '.json';

    return null;
  })();

  if (!extension) return notFoundResponse(req);

  const file = await findTermInFormat({ slug, extension });

  if (!file) return notFoundResponse(req);

  const fetchResponse = await fetch(file.url, {
    method: 'GET',
  });

  const headers = getHeadersWithContentTypes(extension);

  return new Response(fetchResponse.body, {
    headers,
    status: fetchResponse.status,
  });
}
