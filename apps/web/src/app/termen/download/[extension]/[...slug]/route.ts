import { findTermInFormat } from '@/app/termen/find-term-in-format';
import { getHeadersWithContentTypes } from '@/app/termen/get-headers-with-content-type';
import { getSlugFromParams } from '@/app/termen/get-slug-from-params';
import { getValidExtension } from '@/app/termen/get-valid-extension';
import { notFoundResponse } from '@/common/not-found-response';
import slugify from '@sindresorhus/slugify';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[]; extension: string }> },
) {
  const resolvedParams = await params;
  const extension = getValidExtension(resolvedParams.extension);

  if (extension === null) return notFoundResponse(req);

  const slug = getSlugFromParams(resolvedParams.slug);
  const file = await findTermInFormat({ slug, extension });

  if (!file) return notFoundResponse(req);

  const headers = getHeadersWithContentTypes(extension);

  headers.set('Content-Disposition', `attachment; filename="${slugify(slug)}${extension}"`);

  const fetchResponse = await fetch(file.url, {
    method: 'GET',
  });

  return new Response(fetchResponse.body, {
    headers,
    status: fetchResponse.status,
  });
}
