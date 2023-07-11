type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

type OverrideProps<TProps, TComponent extends React.ElementType> = TProps &
  DistributiveOmit<React.ComponentPropsWithRef<TComponent>, keyof TProps>;

export interface OverrideAbleComponentFunctionComponent<
  TDefaultComponent extends React.ElementType,
  TProps
> {
  <TComponent extends React.ElementType = TDefaultComponent>(
    props: {
      component?: TComponent;
    } & OverrideProps<TProps, TComponent>
  ): JSX.Element | null;
}
