import { NavbarNode } from './get-navbar-tree';

export function getNavbarNodeByUrl(root: NavbarNode, targetUrl: string): NavbarNode | undefined {
  const stack: NavbarNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;
    if ([node.url, `/${node.url}`].includes(targetUrl)) {
      return node;
    }

    node.children.forEach((child) => stack.push(child));
  }

  return undefined;
}
