import { put, call, takeLatest } from 'redux-saga/effects';

import { loginSucess, loginFailure } from './actions';
import { UserParams } from './type';
import { LoginAPI } from './api';

export function* loginSaga(payload: UserParams) {
  try {
    const response = yield call(LoginAPI.login, payload);
    yield put(loginSucess(response));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
