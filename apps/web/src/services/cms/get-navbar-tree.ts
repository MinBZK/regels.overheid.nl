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
  const root: NavbarNode = { name: 'root', id: 'root', url: '', children: new Map() };

  pages.forEach((item) => {
    const parts = item.name!.split('/');
    let current = root;

    parts.forEach((part, index) => {
      if (!current.children.has(part)) {
        const nodeId = `synthetic:${Math.random().toString(36).substring(2, 9)}`;
        const newNode: NavbarNode = {
          url: '',
          id: nodeId,
          name: part,
          parent: current,
          children: new Map(),
        };

        current.children.set(part, newNode);
      }

      current = current.children.get(part)!;

      if (index === parts.length - 1) {
        current.url = item.slug!;
        current.id = String(item.id);
      }
    });
  });

  return root;
}
