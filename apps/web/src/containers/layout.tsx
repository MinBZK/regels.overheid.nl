import { Button } from '@mui/material';
import React from 'react';

import { Show } from '@regels-overheid/ui';

import { Navbar } from '../components/navbar';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <Navbar />
      {children}
      <Button onClick={() => setToggle((p) => !p)} sx={{ color: '#fff' }}>
        Toggle
      </Button>
      <Show when={toggle}>
        <span>regels-overheid</span>
      </Show>
    </>
  );
};
