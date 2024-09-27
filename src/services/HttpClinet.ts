import {BASE_URL} from '@constants/httpConstants';
import axios from 'axios';

export const HttpClient = axios.create({
  baseURL: `${BASE_URL}/`,
  timeout: 60 * 1 * 1000,
  withCredentials: false,
});

HttpClient.interceptors.response.use(
  async response => response,
  async error => error,
);
