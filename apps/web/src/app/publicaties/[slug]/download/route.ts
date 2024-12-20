import { resolveCmsImage } from '@/common/resolve-cms-image';
import slugify from '@sindresorhus/slugify';
import { NextRequest } from 'next/server';
import { getPublicationFileBySlug } from './get-publication-file-by-slug';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const file = await getPublicationFileBySlug({ slug: params.slug });

  const fetchResponse = await fetch(resolveCmsImage(file as any), {
    method: 'GET',
  });

  const headers = new Headers();

  headers.set('Content-Disposition', `attachment; filename="${slugify(params.slug)}${file?.ext}"`);
  headers.set('Content-Type', file?.mime || '');

  return new Response(fetchResponse.body, {
    headers,
    status: fetchResponse.status,
  });
}
