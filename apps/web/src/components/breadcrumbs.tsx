import { joinChildren } from '@/common/join-children';
import { IconChevronRight } from '@tabler/icons-react';
import { Container } from './container';

export const Breadcrumbs: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-primary-lighter">
      <Container component="nav" className="flex h-14 items-center gap-x-4 text-base font-bold text-primary-dark">
        {Array.isArray(children) ? joinChildren(children, <IconChevronRight size={24} />) : children}
      </Container>
    </div>
  );
};
