import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
// import { ArchIcon } from '../theme/icons/arch-icon';

const Component: React.FC<{ direction?: 'vertical' | 'horizontal'; showMedia?: boolean }> = ({
  direction = 'vertical',
  showMedia = true,
}) => {
  return (
    <Stack direction={direction === 'vertical' ? 'column' : 'row'}>
      {showMedia && (
        <CardMedia>
          <Box
            sx={({ palette }) => ({
              background: palette.primary.main,
              width: direction === 'vertical' ? '100%' : '285px',
              aspectRatio: direction === 'vertical' ? '2 / 1' : '285 / 320',
            })}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* <ArchIcon fill="transparent" fillOpacity="0" sx={{ fontSize: 100 }} /> */}
          </Box>
        </CardMedia>
      )}
      <CardContent sx={{ display: 'flex' }}>
        <Stack justifyContent="space-between">
          <Box>
            <Chip label="Methode" color="info" />
            <Typography fontSize="20" fontWeight="bold" color="grey.100" marginTop={2}>
              Titel
            </Typography>
            <Typography fontSize="16" color="grey.100" lineHeight="24px">
              Om de beslissingen van de overheid te kunnen uitleggen en controleren is het nodig om het treintje van
              wet- en regelgeving naar de weergave in regels, en naar gegevens en systemen te kunnen volgen.
            </Typography>
          </Box>
          <CardActions>
            <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
              <Typography fontWeight="bold" color="grey.100" fontSize="16px" sx={{ opacity: 0.6 }}>
                01 februari 2022
              </Typography>
              <Button variant="contained">Button</Button>
            </Stack>
          </CardActions>
        </Stack>
      </CardContent>
    </Stack>
  );
};

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Vertical: Story = {
  args: {
    sx: { width: 400 },
    children: <Component />,
  },
};

export const Horizontal: Story = {
  args: {
    sx: { width: 768 },
    children: <Component direction="horizontal" />,
  },
};

export const WithoutMedia: Story = {
  args: {
    sx: { width: 400 },
    children: <Component showMedia={false} />,
  },
};
