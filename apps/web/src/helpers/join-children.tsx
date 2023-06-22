export const joinChildren = (children: any[], separator: JSX.Element) => {
  const result: React.ReactNode[] = [];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child == null) continue;

    result.push(child);

    result.push(separator);
  }

  return result.slice(0, -1);
};
