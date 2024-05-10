import { getNavbarPages } from './get-navbar-pages';

export type NavbarNode = {
  name: string;
  url: string;
  id: string;
  children: Map<string, NavbarNode>;
  parent?: NavbarNode;
};

export async function getNavbarTree() {
  const pages = await getNavbarPages();

  const root: NavbarNode = { name: 'root', children: new Map(), url: '/', id: '_' };

  for (const page of pages) {
    if (!page.slug || !page.name) continue;

    const parts = page.name.split('/').filter(Boolean);

    let parent = root;

    for (const part of parts) {
      if (!parent.children.has(part))
        parent.children.set(part, { name: part, parent, children: new Map(), url: '', id: String(page.id) });

      parent = parent.children.get(part)!;
    }

    parent.url = page.slug;
    parent.name = parts.at(-1) || '';
  }

  return root;
}
