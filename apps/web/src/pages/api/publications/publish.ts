import { strapiDatabase } from '../../../helpers/strapi-database';
import { Octokit } from '@octokit/rest';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import slugify from 'slugify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { owner, repo, secret } = req.query;

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

  const publicationDir = path.resolve(__dirname, '../../../../public/publications', slugify(name, { lower: true }));

  const ocktokit = new Octokit();

  await fs.access(publicationDir).catch(() => fs.mkdir(publicationDir, { recursive: true }));

  const releases = await ocktokit.rest.repos.listReleases({ owner, repo });

  const promises = releases.data.map(async (release) => {
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
  });

  await Promise.all(promises);

  res.status(200).json({ ok: true });
}
