import { Container } from './container';

export const ContainerMethod: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container bleed className="mt-20 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </Container>
  );
};
