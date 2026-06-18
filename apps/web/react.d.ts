import 'react';

declare module 'react' {
  interface StyleAbleProps {
    className?: string;
    style?: CSSProperties;
  }

  interface StyleAbleFC<P = {}> extends FC<P & StyleAbleProps> {}

  type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

  type OverrideProps<TProps, TComponent extends ElementType> = TProps &
    DistributiveOmit<ComponentPropsWithRef<TComponent>, keyof TProps>;

  interface OverrideAbleComponentFC<TDefaultComponent extends ElementType, TProps> {
    <TComponent extends ElementType = TDefaultComponent>(
      props: {
        component?: TComponent;
      } & OverrideProps<TProps, TComponent>
    ): ReactNode;
    displayName?: string;
  }
}

declare global {
  namespace JSX {
    type Element = import('react').JSX.Element;
    type ElementClass = import('react').JSX.ElementClass;
    type ElementAttributesProperty = import('react').JSX.ElementAttributesProperty;
    type ElementChildrenAttribute = import('react').JSX.ElementChildrenAttribute;
    type LibraryManagedAttributes<C, P> = import('react').JSX.LibraryManagedAttributes<C, P>;
    type IntrinsicAttributes = import('react').JSX.IntrinsicAttributes;
    type IntrinsicClassAttributes<T> = import('react').JSX.IntrinsicClassAttributes<T>;
    type IntrinsicElements = import('react').JSX.IntrinsicElements;
  }
}
