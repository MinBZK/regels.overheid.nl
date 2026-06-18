import { notFoundResponse } from '@/common/not-found-response';
import fs from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function GET(req: NextRequest, { params }: { params: Promise<{ file: string }> }) {
  const { file: fileName } = await params;
  const rootDirPath = path.resolve(process.cwd(), 'src/app/waardelijsten');
  const filePath = path.resolve(rootDirPath, `${fileName}`);

  if (!filePath.startsWith(rootDirPath)) return notFoundResponse(req);

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
