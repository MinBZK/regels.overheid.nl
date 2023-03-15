import { strapiDatabase } from '@/helpers/strapi-database';
import { Octokit } from '@octokit/rest';
import { compareVersions } from 'compare-versions';
import fs from 'fs/promises';
import path from 'path';
import slugify from 'slugify';

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

    const name = await strapiDatabase
      .query('SELECT * FROM publishers WHERE owner = $1 AND repo = $2 AND secret = $3', [owner, repo, secret])
      .then((result) => {
        if (result.rows.length === 0) throw new Error('Publisher not found');

        if (result.rows.length > 1) throw new Error('Multiple publishers found');

        if (result.rows[0].name == null) throw new Error('Publisher name is null');

        return result.rows[0].name as string;
      });

    const publicationDir = path.resolve(rootPublicationsDir, slugify(name, { lower: true }));

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
