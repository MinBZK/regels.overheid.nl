import * as Card from '@/components/card';
import * as MethodNavigation from '@/components/method-navigation';
import { Pill } from '@/components/pill';

interface Props extends React.PropsWithChildren {
  title: string;
  tag?: string | null;
  docsURL?: string | null;
}

export const Root: React.FC<Props> = ({ title, children, docsURL, tag }) => {
  const docs = docsURL ? docsURL : undefined;

  return (
    <Card.Root>
      <Card.Header>{tag && <Pill label={tag} className="capitalize" />}</Card.Header>
      <Card.Title>{title}</Card.Title>
      <Card.Content>
        {children}
        <Card.Footer>
          <MethodNavigation.Root method={title}>
            <MethodNavigation.MethodItems override={{ docs }} />
          </MethodNavigation.Root>
        </Card.Footer>
      </Card.Content>
      <Card.CollapseButton />
      <Card.Collapse>
        <MethodNavigation.Root method={title} orientation="vertical">
          <MethodNavigation.MethodItems showLabels override={{ docs }} />
        </MethodNavigation.Root>
      </Card.Collapse>
    </Card.Root>
  );
};
