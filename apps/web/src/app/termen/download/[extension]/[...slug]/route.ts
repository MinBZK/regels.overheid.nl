import { findTermInFormat, FindTermInFormatArgs } from '@/app/termen/find-term-in-format';
import { getHeadersWithContentTypes } from '@/app/termen/get-headers-with-content-type';
import { getSlugFromParams } from '@/app/termen/get-slug-from-params';
import { getValidExtension } from '@/app/termen/get-valid-extension';
import { notFoundResponse } from '@/common/not-found-response';
import { resolveCmsImage } from '@/common/resolve-cms-image';
import slugify from '@sindresorhus/slugify';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { slug: string[]; extension: string } }) {
  const extension = getValidExtension(params.extension);

  if (extension === null) return notFoundResponse(req);

  const slug = getSlugFromParams(params.slug);
  const term = await findTermInFormat({ slug, extension });

  const headers = getHeadersWithContentTypes(extension);

  headers.set('Content-Disposition', `attachment; filename="${slugify(slug)}${extension}"`);

  const fetchResponse = await fetch(resolveCmsImage(term.files as any), {
    method: 'GET',
  });

  return new Response(fetchResponse.body, {
    headers,
    status: fetchResponse.status,
  });
}
