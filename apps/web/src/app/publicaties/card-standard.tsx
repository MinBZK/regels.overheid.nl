import * as Card from '@/components/card';
import { getMethodTree, methodsTree } from '@/common/methods-tree';
import { Button } from '@/components/button';
import * as MethodNavigation from '@/components/method-navigation';
import { Pill } from '@/components/pill';
import { Typography } from '@/components/typography';
import { IconExternalLink } from '@tabler/icons-react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
  url?: string;
  method?: keyof typeof methodsTree;
  variant?: 'published' | 'work-in-progress' | 'unavailable';
}

export const Root: React.FC<Props> = ({ variant = 'published', children, method, title, url }) => {
  const computedUrl = (() => {
    if (url) return url;

    if (method && 'standard') {
      const tree = getMethodTree(method);

      if (tree && 'standard' in tree) return tree.standard;
    }
  })();

  return (
    <Card.Root>
      {variant !== 'unavailable' && (
        <Card.Header>
          {variant === 'work-in-progress' && (
            <Pill label="Work in progress" variant="warning" className="self-center" />
          )}
          {computedUrl && (
            <Button
              className="ml-auto"
              variant="text"
              component="a"
              href={computedUrl}
              target="blank"
              endIcon={<IconExternalLink />}
            >
              Bekijk publicatie
            </Button>
          )}
        </Card.Header>
      )}
      <Card.Title>{title}</Card.Title>
      <Card.Content>
        {children && <Typography className="line-clamp-4 overflow-hidden text-ellipsis">{children}</Typography>}
        {!children && variant === 'unavailable' && (
          <Typography>
            Binnenkort zal er een publicatie verschijnen op deze kaart, echter is deze momenteel nog in ontwikkeling.
          </Typography>
        )}
        <Card.Footer>
          {method && (
            <MethodNavigation.Root method={method}>
              <MethodNavigation.MethodItems hide="standard" />
            </MethodNavigation.Root>
          )}
          {variant === 'unavailable' && <Typography>Binnenkort beschikbaar.</Typography>}
        </Card.Footer>
      </Card.Content>
      {method && (
        <>
          <Card.Collapse>
            <MethodNavigation.Root method={method} orientation="vertical">
              <MethodNavigation.MethodItems showLabels hide="standard" />
            </MethodNavigation.Root>
          </Card.Collapse>
          <Card.CollapseButton />
        </>
      )}
    </Card.Root>
  );
};
