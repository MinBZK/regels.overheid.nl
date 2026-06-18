import { gqlClient } from '@/gql-client';
import slugify from '@sindresorhus/slugify';
import { notFound } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const publication = await gqlClient
    .PublicationsForFileBySlug({ slug })
    .then((res) => res.publications[0]);

  if (!publication?.file) throw notFound();

  const fetchResponse = await fetch(publication.file.url, {
    method: 'GET',
  });

  const headers = new Headers();

  headers.set('Content-Disposition', `attachment; filename="${slugify(slug)}${publication.file.ext}"`);
  headers.set('Content-Type', publication.file.mime);

  return new Response(fetchResponse.body, {
    headers,
    status: fetchResponse.status,
  });
}
