export type RouteProps = {
  component: Function;
  isAuthenticated: boolean;
  to?: string;
  [rest: string]: any
}
