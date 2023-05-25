interface Props extends React.PropsWithChildren {
  href?: string;
  endIcon?: JSX.Element;
  component?: React.ElementType;
}

export const Button: React.FC<Props> = ({ children, component: Component = 'button', endIcon, href }) => {
  return (
    <Component
      href={href}
      className="h-10 bg-primary-main px-4 flex items-center rounded-lg text-white text-base font-bold hover:bg-primary-dark"
    >
      {children}
      {endIcon && <span className="ml-3">{endIcon}</span>}
    </Component>
  );
};
