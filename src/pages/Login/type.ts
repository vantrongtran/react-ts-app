import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface UserParams {
  email: string;
  password: string;
};

export interface User {
  id: Number;
  email: String;
  token: String;
  expireAt: String
};

export interface LoginState {
  readonly user: User;
};

export type AppActions = ActionType<typeof actions>;
