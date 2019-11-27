export interface GlobalState {
  readonly loading: boolean;
  readonly error?: object | boolean;
  readonly currentUser: string;
}

export type ApplicationState = {
  global: GlobalState;
}
