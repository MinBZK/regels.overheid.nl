import { Container } from '@/components/container';
import { PageNotFound } from '@/components/page-not-found';

export default function NotFound() {
  return (
    <Container component="main" className="pb-8 pt-14">
      <PageNotFound />
    </Container>
  );
}
