import { FindTermInFormatArgs } from './find-term-in-format';

export function getHeadersWithContentTypes(extension: FindTermInFormatArgs['extension']) {
  const headers = new Headers();

  if (extension === '.ttl') headers.set('content-type', 'text/turtle');

  if (extension === '.json') headers.set('content-type', 'application/json');

  if (extension === '.rdf') headers.set('content-type', 'application/rdf+xml');

  return headers;
}
