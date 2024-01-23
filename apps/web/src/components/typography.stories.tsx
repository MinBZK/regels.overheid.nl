import type { Meta } from '@storybook/react';
import { Typography, TypographyProps } from './typography';
import React from 'react';

export const _Typography: React.FC<TypographyProps> = ({ variant = 'p', ...props }) => (
  <Typography {...{ variant, ...props }} />
);

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: _Typography,
  tags: ['autodocs'],
  args: {
    variant: 'p',
    children: 'Hello World!',
  },
};

export const Demo = () => (
  <>
    <Typography variant="h1">Heading One: The Quick Brown Fox</Typography>
    <Typography variant="p">
      Paragraph: In an enchanted forest, a quick brown fox embarked on an extraordinary journey, leaping over lazy dogs
      and marveling at the world&apos;s wonders.
    </Typography>

    <Typography variant="h2">Heading Two: Jumps Over the Lazy Dog</Typography>
    <Typography variant="p">
      Paragraph: This peculiar dog, known for its laziness, spent its days basking in the sun, dreaming of a world
      filled with endless treats and joyous barks.
    </Typography>

    <Typography variant="h3">Heading Three: A Spectacular Display</Typography>
    <Typography variant="p">
      Paragraph: The night sky lit up with a spectacular display of stars, painting a picture of celestial beauty and
      inspiring awe in the hearts of onlookers.
    </Typography>

    <Typography variant="h4">Heading Four: In the Mystical Forest</Typography>
    <Typography variant="p">
      Paragraph: Mystical creatures roamed this forest, each with their own unique stories and magical abilities, adding
      to the forest&apos;s ancient and mysterious allure.
    </Typography>
  </>
);

export default meta;
