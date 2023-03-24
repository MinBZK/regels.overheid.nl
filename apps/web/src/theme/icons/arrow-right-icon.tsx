import { SvgIcon, SvgIconProps } from '@mui/material';

export const ArrowRightIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 25 24" {...props}>
    <path
      d="M5.52783 12H19.5278"
      stroke={props.color || '#000'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.5278 18L19.5278 12"
      stroke={props.color || '#000'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.5278 6L19.5278 12"
      stroke={props.color || '#000'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
