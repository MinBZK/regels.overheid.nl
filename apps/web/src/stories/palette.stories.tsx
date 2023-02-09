import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

interface Props {
  category: 'primary' | 'info' | 'warning' | 'error' | 'success';
}

const PaletteDisplay: React.FC<Props> = ({ category }) => {
  const theme = useTheme();

  const colorOrder = ['dark', 'main', 'light', 'lighter'] as const;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Example</TableCell>
            <TableCell align="right">Token</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {colorOrder.map((color) => (
            <TableRow key={`${category}.${color}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Box
                  width={100}
                  borderRadius={1}
                  sx={{ aspectRatio: '2 / 1', backgroundColor: theme.palette[category][color] }}
                />
              </TableCell>
              <TableCell align="right">
                {category}.{color}
              </TableCell>
              <TableCell align="right">{theme.palette[category][color] || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof PaletteDisplay> = {
  title: 'Palette',
  component: PaletteDisplay,
};

export default meta;

type Story = StoryObj<typeof PaletteDisplay>;

export const Primary: Story = {
  args: {
    category: 'primary',
  },
};

export const Info: Story = {
  args: {
    category: 'info',
  },
};

export const Success: Story = {
  args: {
    category: 'success',
  },
};

export const Warning: Story = {
  args: {
    category: 'warning',
  },
};

export const Error: Story = {
  args: {
    category: 'error',
  },
};
