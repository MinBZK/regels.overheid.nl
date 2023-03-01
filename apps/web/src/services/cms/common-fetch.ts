import { makeURL } from './make-url';

export const commonFetch = async <T>(path: string) => {
  const url = makeURL(path);

  const response = await fetch(url.toString());

  const json = await response.json();

  return json as T;
};
