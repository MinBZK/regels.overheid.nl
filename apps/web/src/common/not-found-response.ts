import { NextRequest } from 'next/server';

export async function notFoundResponse(request: Request | NextRequest) {
  const url = new URL('/404', request.url);
  const response = await fetch(url.toString());

  return new Response(response.body, { headers: { 'Content-Type': 'text/html' } });
}
