import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { DEFAULT_API_CONFIG } from './config';

export default class BaseApi {
  protected client: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}){
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config
    });

    this.errorHandler(this.client);
  }

  private errorHandler(client: AxiosInstance) {
    client.interceptors.response.use(res => res, error => {
      console.log(error.response.data)
    });
  }
}
