import { notFoundResponse } from '@/common/not-found-response';
import fs from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest, { params }: { params: { file: string } }) {
  const rootDirPath = path.resolve(process.cwd(), 'src/app/waardelijsten/[file]');
  const filePath = path.resolve(rootDirPath, `${params.file}`);

  console.log({ filePath });

  const fileExists = await fs
    .stat(filePath)
    .then(() => true)
    .catch(() => false);

  if (!fileExists) return notFoundResponse(req);

  const file = await fs.readFile(filePath);

  return new Response(file.buffer, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
