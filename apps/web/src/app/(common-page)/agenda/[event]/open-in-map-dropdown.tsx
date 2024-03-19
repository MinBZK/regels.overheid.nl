'use client';

import * as DropdownMenu from '@/components/dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import { PropsWithChildren, useMemo } from 'react';

interface Props extends PropsWithChildren {
  address: string;
}

export const OpenInMapDropdown: React.FC<Props> = ({ children, address }) => {
  const googleURL = useMemo(() => {
    const rootURL = new URL('/maps/search/', 'https://www.google.com/');

    rootURL.searchParams.append('api', '1');
    rootURL.searchParams.append('query', address);

    return rootURL.toString();
  }, [address]);

  const mapsURL = useMemo(() => {
    const rootURL = new URL('/', 'https://maps.apple.com/');
    rootURL.searchParams.append('q', address);

    return rootURL.toString();
  }, [address]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Slot>{children}</Slot>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item asChild>
            <a href={googleURL} target="__blank">
              Google Maps
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <a href={mapsURL}>Apple Kaarten</a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
