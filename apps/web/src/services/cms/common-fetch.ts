import { makeURL } from './make-url';

export const commonFetch = async <T>(path: string, init?: RequestInit) => {
  const url = makeURL(path);

  const response = await fetch(url.toString(), init);

  const json = await response.json();

  return json as T;
};
