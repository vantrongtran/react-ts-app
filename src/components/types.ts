export type RouteProps = {
  component: Function;
  isAuthenticated?: boolean;
  path?: string;
  [rest: string]: any;
};
