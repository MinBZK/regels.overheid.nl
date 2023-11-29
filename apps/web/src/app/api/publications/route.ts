import { db } from '@/drizzle/db';
import { publishers } from '@/drizzle/schema';
import { Octokit } from '@octokit/rest';
import slugify from '@sindresorhus/slugify';
import { compareVersions } from 'compare-versions';
import { and, eq } from 'drizzle-orm';
import fs from 'fs/promises';
import path from 'path';

const rootPublicationsDir = path.resolve(__dirname, '../../../../../public/public/publications');

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);

    const repo = url.searchParams.get('repo');
    const owner = url.searchParams.get('owner');
    const secret = url.searchParams.get('secret');

    if (typeof repo !== 'string') throw new Error('Repo is not a string');

    if (typeof owner !== 'string') throw new Error('Owner is not a string');

    if (typeof secret !== 'string') throw new Error('Secret is not a string');

    const name = await db
      .select({
        name: publishers.name,
      })
      .from(publishers)
      .where(and(eq(publishers.repo, repo), eq(publishers.owner, owner), eq(publishers.secret, secret)))
      .limit(1)
      .then((result) => {
        if (!result[0].name) throw new Error('Publisher not found');

        return result[0].name;
      });

    const publicationDir = path.resolve(rootPublicationsDir, slugify(name, { lowercase: true }));

    const ocktokit = new Octokit();

    await fs.access(publicationDir).catch(() => fs.mkdir(publicationDir, { recursive: true }));

    const releases = await ocktokit.rest.repos.listReleases({ owner, repo });

    const latestPath = path.resolve(publicationDir, 'latest.html');

    await fs
      .access(latestPath)
      .then(() => fs.rm(latestPath))
      .catch(() => null);

    const versionNumbersPromises = releases.data.map(async (release) => {
      const [asset] = release.assets;

      if (!asset) return;

      if (asset.content_type !== 'text/html') throw new Error('Illegal content type');

      const releasePath = path.resolve(publicationDir, `${release.tag_name}.html`);

      const releaseExists = await fs
        .access(releasePath)
        .then(() => true)
        .catch(() => false);

      if (releaseExists) await fs.rm(releasePath);

      await fetch(asset.browser_download_url)
        .then((res) => res.arrayBuffer())
        .then((buffer) => fs.writeFile(path.resolve(releasePath), Buffer.from(buffer)));

      return path.basename(releasePath, '.html');
    });

    const versionNumbers = await Promise.all(versionNumbersPromises);
    const [latestVersionNumber] = versionNumbers.filter(Boolean).sort(compareVersions).reverse();

    await fs.copyFile(path.resolve(publicationDir, `${latestVersionNumber}.html`), latestPath);

    return new Response(JSON.stringify({ ok: true }));
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, message: e.message }));
  }
}
