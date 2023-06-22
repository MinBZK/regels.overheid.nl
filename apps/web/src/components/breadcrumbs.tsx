import { IconChevronRight } from '@tabler/icons-react';
import { Container } from './container';
import { joinChildren } from '@/helpers/join-children';

export const Breadcrumbs: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-primary-lighter">
      <Container component="nav" className="h-14 flex items-center text-primary-dark font-bold text-base gap-x-4">
        {Array.isArray(children) ? joinChildren(children, <IconChevronRight size={24} />) : children}
      </Container>
    </div>
  );
};
