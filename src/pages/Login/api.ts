import axios from 'axios';

import BaseApi from '../../api/baseApi';
import { UserParams } from './type'

class LoginApi extends BaseApi {
  login(data: userParams) {
    return this.client.post('/signin', data);
  };
}

export const LoginAPI = new LoginApi();
