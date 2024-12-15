import { FindTermInFormatArgs } from './find-term-in-format';

export function getValidExtension(extension: string): FindTermInFormatArgs['extension'] | null {
  if (extension === 'ttl') return '.ttl';

  if (extension === 'rdf') return '.rdf';

  if (extension === 'json') return '.json';

  return null;
}
