import { Fragment, ReactNode } from 'react';

export const joinChildren = (children: React.ReactNode, separator: JSX.Element) => {
  const filteredChildren = Array.isArray(children) ? children.filter(Boolean) : children;

  if (!Array.isArray(filteredChildren) || filteredChildren.length === 1) {
    return <>{filteredChildren}</>;
  }

  const separatedChildren: React.ReactNode[] = [];
  const numChildren = filteredChildren.length;

  filteredChildren.forEach((child, index) => {
    separatedChildren.push(child as ReactNode);

    if (index !== numChildren - 1) {
      separatedChildren.push(<Fragment key={`separator-${index}`}>{separator}</Fragment>);
    }
  });

  return <>{separatedChildren}</>;
};
