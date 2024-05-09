'use client';

import * as DropdownMenu from '@/components/dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import { format } from 'date-fns';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren, useMemo } from 'react';

interface Props extends PropsWithChildren {
  end: Date;
  start: Date;
  eventTitle: string;
  eventDetails: string;
  eventLocation: string;
}

export const AddToCalendarDropdown: React.FC<Props> = ({
  children,
  start,
  end,
  eventTitle,
  eventDetails,
  eventLocation,
}) => {
  const pathName = usePathname();

  const outlookURL = useMemo(() => {
    const root = new URL('/calendar/0/deeplink/compose?path=/calendar/action/compose', 'https://outlook.live.com');

    root.searchParams.append('rru', 'addevent');
    root.searchParams.append('subject', eventTitle);
    root.searchParams.append('body', eventDetails);
    root.searchParams.append('startdt', format(start, 'yyyyMMddTHHmmss'));
    root.searchParams.append('enddt', format(end, 'yyyyMMddTHHmmss'));
    root.searchParams.append('location', eventLocation);

    return root.toString();
  }, [end, eventDetails, eventLocation, eventTitle, start]);

  const googleURL = useMemo(() => {
    const root = new URL('https://calendar.google.com/calendar/render?action=TEMPLATE');

    root.searchParams.append('text', eventTitle);
    root.searchParams.append('details', eventDetails);
    root.searchParams.append('location', eventLocation);
    root.searchParams.append('ctz', 'Europe/Amsterdam');
    root.searchParams.append('dates', `${format(start, `yyyyMMdd'T'HHmmss`)}/${format(end, `yyyyMMdd'T'HHmmss`)}`);

    return root.toString();
  }, [end, eventDetails, eventLocation, eventTitle, start]);

  const yahooURL = useMemo(() => {
    const root = new URL('https://calendar.yahoo.com/?v=60&view=d&type=20');

    root.searchParams.append('title', eventTitle);
    root.searchParams.append('st', format(start, 'yyyyMMddTHHmmss'));
    root.searchParams.append('dur', '240');
    root.searchParams.append('desc', eventDetails);
    root.searchParams.append('in_loc', eventLocation);

    return root.toString();
  }, [eventDetails, eventLocation, eventTitle, start]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Slot>{children}</Slot>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item asChild>
            <a href={outlookURL} target="_blank" rel="noopener noreferrer">
              Outlook
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <a href={googleURL} target="_blank" rel="noopener noreferrer">
              Google Calendar
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <a href={yahooURL} target="_blank" rel="noopener noreferrer">
              Yahoo Calendar
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <a href={`${pathName}/ical`} target="_blank" rel="noopener">
              iCal
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
