import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get('host');

  if (host === 'waardelijsten.localhost' || host === 'waardelijsten.regels.overheid.nl') {
    return NextResponse.rewrite(new URL(`/waardelijsten${url.pathname}`, url));
  }
}
