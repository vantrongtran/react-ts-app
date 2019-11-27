import { action } from 'typesafe-actions';

import { ActionTypes } from './constants';

export const loginSucess = (payload: any) => action(ActionTypes.LOGIN_SUCCESS)
export const loginFailure = (payload: any) => action(ActionTypes.LOGIN_FAILURE)
