import 'react';

declare module 'react' {
  type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

  type OverrideProps<TProps, TComponent extends React.ElementType> = TProps &
    DistributiveOmit<React.ComponentPropsWithRef<TComponent>, keyof TProps>;

  interface OverrideAbleComponentFC<TDefaultComponent extends React.ElementType, TProps> {
    <TComponent extends React.ElementType = TDefaultComponent>(
      props: {
        component?: TComponent;
      } & OverrideProps<TProps, TComponent>
    ): JSX.Element | null;
    displayName?: string;
  }
}
