import { SvgIcon, SvgIconProps } from '@mui/material';

export const PlusIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 25 24" {...props}>
    <path d="M12.5278 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.52783 12H19.5278" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </SvgIcon>
);
