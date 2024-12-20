'use client';

import { Button } from '@/components/button';
import { IconClipboard } from '@tabler/icons-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  text: string;
}

export const CopyCiteToClipboard: React.FC<Props> = ({ text }) => (
  <CopyToClipboard text={text}>
    <Button startIcon={<IconClipboard />}>Kopiëren naar klembord</Button>
  </CopyToClipboard>
);
