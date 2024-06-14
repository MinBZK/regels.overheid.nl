import { Typography } from '@/components/typography';
import { Children, isValidElement } from 'react';
import { SectionItemCollapse, SectionItemCollapseButton, SectionItemContextProvider } from './section-item-collapse';

interface SectionProps extends React.PropsWithChildren {
  title: string;
}

interface ItemProps extends React.PropsWithChildren {
  title: string;
  html?: string;
  href?: string;
}

interface ItemBadgesProps extends React.PropsWithChildren {}

export const Root: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div>
      <Typography variant="h3" className="border-b border-primary-dark pb-4 text-xl">
        {title}
      </Typography>
      {children}
    </div>
  );
};

export const Item: React.FC<ItemProps> = ({ title, children, html, href }) => {
  let badges, description;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    if (child.type === ItemBadges) badges = child;

    if (child.type === ItemDescription) description = child;
  });

  return (
    <SectionItemContextProvider>
      <div className="mt-4">
        <Typography variant="h4" className="text-lg text-black">
          {title}
        </Typography>
        {description}
        <div className="mt-2 flex flex-col-reverse items-start gap-4 lg:flex-row lg:items-center">
          <SectionItemCollapseButton href={href} />
          {badges}
        </div>
        {html && (
          <SectionItemCollapse>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </SectionItemCollapse>
        )}
      </div>
    </SectionItemContextProvider>
  );
};

export const ItemBadges: React.FC<ItemBadgesProps> = ({ children }) => {
  return <div className="flex items-center gap-2 self-stretch">{children}</div>;
};

export const ItemDescription: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="mt-2 text-sm text-gray-600">{children}</div>;
};
