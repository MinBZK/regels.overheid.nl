interface Props extends React.PropsWithChildren {
  component?: React.ElementType;
}

export const NotificationTitle: React.FC<Props> = ({ children, component: Component = 'h5' }) => (
  <Component className="text-xl font-bold ">{children}</Component>
);
