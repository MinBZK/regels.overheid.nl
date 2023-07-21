interface Options {
  ext: string;
  hash: string;
  width?: number;
  height?: number;
}

export function resolveCmsImage({ ext, hash, height, width }: Options) {
  const publicURL = process.env.WEB_URL || process.env.NEXT_WEB_URL;

  const url = new URL(`/media/cms/${hash}.${ext}`, publicURL);

  if (width) url.searchParams.set('w', width.toString());

  if (height) url.searchParams.set('h', height.toString());

  return url.toString();
}

resolveCmsImage({ ext: 'png', hash: '7fc7db1746', width: 100, height: 100 });
