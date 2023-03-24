import { SvgIcon, SvgIconProps } from '@mui/material';

export const ScaleIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 109 107" {...props}>
    <path
      d="M32.2085 89.46H76.7918"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke={props.color || '#000'}
    />
    <path
      d="M27.75 27.0433L54.5 22.585L81.25 27.0433"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke={props.color || '#000'}
    />
    <path
      d="M54.5 13.6685V89.4601"
      stroke={props.color || '#000'}
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.125 53.7935L27.75 27.0435L14.375 53.7935C14.375 57.3407 15.7841 60.7427 18.2924 63.251C20.8007 65.7593 24.2027 67.1685 27.75 67.1685C31.2973 67.1685 34.6993 65.7593 37.2076 63.251C39.7159 60.7427 41.125 57.3407 41.125 53.7935Z"
      stroke-width="4"
      stroke-linecap="round"
      fill="none"
      stroke-linejoin="round"
      stroke={props.color || '#000'}
    />
    <path
      fill="none"
      d="M94.625 53.7935L81.25 27.0435L67.875 53.7935C67.875 57.3407 69.2841 60.7427 71.7924 63.251C74.3007 65.7593 77.7027 67.1685 81.25 67.1685C84.7973 67.1685 88.1993 65.7593 90.7076 63.251C93.2159 60.7427 94.625 57.3407 94.625 53.7935Z"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke={props.color || '#000'}
    />
  </SvgIcon>
);
