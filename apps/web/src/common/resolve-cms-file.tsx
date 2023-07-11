export const resolveCmsFile = (url: string) => {
  const cmsUrl = process.env.CMS_URL || process.env.NEXT_PUBLIC_CMS_URL;

  if (!cmsUrl) throw new Error('CMS_URL is not defined');

  return `${cmsUrl}${url}`;
};
