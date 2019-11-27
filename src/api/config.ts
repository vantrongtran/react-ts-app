import { AxiosRequestConfig } from 'axios';

export const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: '/api/v1',
  timeout: 5000,
  headers: {
    Accept: 'application/json'
  }
}
