import { notFoundResponse } from '@/common/not-found-response';
import { resolveFromPublicPublicDir } from '@/common/resolve-from-public-public-dir';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(request: Request, { params }: { params: { version?: string; publication: string } }) {
  const { publication, version = 'latest' } = params;

  const publicationPath = resolveFromPublicPublicDir('publications', publication, `${version}.html`);

  const publicationExists = await fs
    .access(publicationPath)
    .then(() => true)
    .catch(() => false);

  if (!publicationExists) return notFoundResponse(request);

  const publicationPDF = resolveFromPublicPublicDir('publications', publication, `${version}.pdf`);

  const pdf = await fs
    .access(publicationPDF)
    .then(() => fs.readFile(publicationPDF))
    .catch(async () => {
      const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

      const content = await fs.readFile(publicationPath, 'utf-8');

      const page = await browser.newPage();
      await page.setContent(content);

      const pdf = await page.pdf({ format: 'A4' });

      await Promise.all([await browser.close(), await fs.writeFile(publicationPDF, pdf)]);

      return pdf;
    });

  return new NextResponse(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}
