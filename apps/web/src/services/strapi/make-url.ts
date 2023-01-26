export const makeURL = (path: string) => new URL(path, process.env.CMS_API_URL);
