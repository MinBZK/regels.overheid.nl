const getCmsUrl = () => {
  if (process.env.CMS_API_URL) return process.env.CMS_API_URL;

  if (process.env.NEXT_PUBLIC_CMS_ROOT_URL) return `${process.env.NEXT_PUBLIC_CMS_ROOT_URL}/api`;

  throw new Error('CMS_API_URL or NEXT_PUBLIC_CMS_ROOT_URL must be defined');
};

export const makeURL = (path: string) => new URL(path, getCmsUrl());
