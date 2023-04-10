import { Meta, StoryObj } from '@storybook/react';
import { RoadmapQuarterCard } from '../../components/roadmap-quarter-card';
import { roadmapQuarterCardsItems } from '../../components/roadmap-quarter-card/roadmap-quarter-cards-items';

const meta: Meta<typeof RoadmapQuarterCard> = {
  title: 'Components/Roadmap Quarter Card',
  tags: ['autodocs'],
  component: RoadmapQuarterCard,
  args: {
    items: roadmapQuarterCardsItems[0],
  },
};

export default meta;

type Story = StoryObj<typeof RoadmapQuarterCard>;

export const Q1: Story = {
  args: {
    quarter: 1,
    items: roadmapQuarterCardsItems[0],
  },
};

export const Q2: Story = {
  args: {
    quarter: 2,
    items: roadmapQuarterCardsItems[1],
  },
};

export const Q3: Story = {
  args: {
    quarter: 3,
    items: roadmapQuarterCardsItems[2],
  },
};

export const Q4: Story = {
  args: {
    quarter: 4,
    items: roadmapQuarterCardsItems[3],
  },
};
