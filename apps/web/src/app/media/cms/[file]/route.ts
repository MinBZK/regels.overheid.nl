import { resolveCmsFile } from '@/common/resolve-cms-file';
import { resolveFromPublicPublicDir } from '@/common/resolve-from-public-public-dir';
import fs from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

interface Params {
  file: string;
}

function fileName({ name: filename, w: width, h: height }: { name: string; w?: number | null; h?: number | null }) {
  const extensionStart = filename.lastIndexOf('.');

  if (extensionStart === -1) return filename;

  const extension = filename.slice(extensionStart);
  const baseName = filename.slice(0, extensionStart);

  let resolutionInfo = '';

  if (width) resolutionInfo += `@w=${width}`;

  if (height) resolutionInfo += `@h=${height}`;

  const transformedFilename = `${baseName}${resolutionInfo}${extension}`;

  return transformedFilename;
}

async function fileResponse(filePath: string) {
  const file = await fs.readFile(filePath);

  const response = new NextResponse(file);

  return response;
}

function nullOrNumber(input: string | null) {
  if (input === null) return null;

  const parsedInt = parseInt(input, 10);
  return isNaN(parsedInt) ? null : parsedInt;
}

export async function GET({ nextUrl }: NextRequest, { params }: { params: Params }) {
  const { file } = params;

  const basePath = 'media/cms';

  const w = nullOrNumber(nextUrl.searchParams.get('w'));
  const h = nullOrNumber(nextUrl.searchParams.get('h'));

  const imagePath = resolveFromPublicPublicDir(basePath, fileName({ name: file, w, h }));

  const imageExists = await fs
    .access(imagePath)
    .then(() => true)
    .catch(() => false);

  if (imageExists) return fileResponse(imagePath);

  const rootImagePath = resolveFromPublicPublicDir(basePath, file);

  const rootImageExists = await fs
    .access(rootImagePath)
    .then(() => true)
    .catch(() => false);

  if (!rootImageExists) {
    const responseArrayBuffer = await fetch(resolveCmsFile('/uploads/' + file)).then((response) =>
      response.arrayBuffer()
    );

    const responseBuffer = Buffer.from(responseArrayBuffer);

    await fs.writeFile(rootImagePath, responseBuffer);

    if (!w && !h) return new NextResponse(responseBuffer);
  }

  const image = await sharp(rootImagePath).resize(w, h).toBuffer();

  await fs.writeFile(imagePath, image);

  return new NextResponse(image);
}
