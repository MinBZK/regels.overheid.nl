import { Card } from '@/components/card';
import { MethodCard as MethodCardComponent } from '@/components/card/method-card';
import { PublicationCard as PublicationCardComponent } from '@/components/card/publication-card';
import { RoadmapQuarterCard as RoadmapQuarterCardComponent } from '@/components/card/roadmap-quarter-card';
import { roadmapQuarterCardsItems } from '@/components/roadmap-quarter-card/roadmap-quarter-cards-items';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero nec nisl tincidunt facilisis. Sed nec urna vitae mauris hendrerit consequat. Fusce venenatis urna id lacinia luctus. In hac habitasse platea dictumst. Vestibulum rhoncus nibh eu dolor iaculis, nec iaculis dolor condimentum. Mauris a quam eu nunc scelerisque scelerisque. Nam rutrum arcu et risus feugiat, ut varius ligula hendrerit. Morbi semper nulla sed sem faucibus, non efficitur lectus rhoncus. Cras ultricies, est sit amet aliquet eleifend, sapien mauris convallis sem, vel congue mi lacus id nunc.',
  },
};

export const PublicationCard: Story = {
  render: () => (
    <PublicationCardComponent
      title="Title of the publication"
      description="Short description regarding the publication"
      tag="A Tag"
      url="#"
    />
  ),
};

export const MethodCard: Story = {
  render: () => (
    <div className="mx-auto sm:w-1/2 lg:w-full xl:w-1/3">
      <MethodCardComponent
        href="#"
        icon="arch"
        tag="methode"
        date="2021-01-01"
        title="De LegitiMaat"
        description="De LegitiMaat is een werkmethode om de geautomatiseerde uitvoering van wetten door de overheid op een gestandaardiseerde manier inzichtelijk te maken en te beoordelen."
      />
    </div>
  ),
};

export const RoadmapQuarterCard: Story = {
  render: () => <RoadmapQuarterCardComponent quarter={1} items={roadmapQuarterCardsItems[0]} />,
};
