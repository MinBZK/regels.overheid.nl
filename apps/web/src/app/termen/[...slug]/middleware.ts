import { NextRequest, NextResponse } from 'next/server';

interface Middleware {
  predicate(request: NextRequest): boolean;
  handler(request: NextRequest): any;
}

export const termenMiddleware: Middleware = {
  predicate: (request) => request.nextUrl.pathname.startsWith('/termen'),
  handler: (request) => {
    const handlerHeaders = ['application/rdf+xml', 'text/turtle', 'application/json'];
    const acceptHeader = request.headers.get('accept');

    const shouldRewrite =
      acceptHeader === null ? false : handlerHeaders.some((handlerHeader) => acceptHeader?.includes(handlerHeader));

    if (shouldRewrite) {
      const slug = request.nextUrl.pathname.split('/').toSpliced(0, 2).join('/');
      const url = new URL(`/termen/handler/${slug}`, process.env.NEXT_PUBLIC_WEB_URL);

      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  },
};
