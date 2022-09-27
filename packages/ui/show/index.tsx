const Show = ({ children, when }: { children: JSX.Element; when: boolean }): JSX.Element | null =>
  when ? children : null;

export default Show;
