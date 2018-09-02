import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import config from '@/constants';

// create an axios instance
const service = axios.create({
  baseURL: config.apiUrl,
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (serviceConfig) => {
    if (store.getters.token) {
      // serviceConfig.headers['X-Token'] = getToken();
    }
    return serviceConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

// respone interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status !== 200) {
      return Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000,
      });
    }
    return res;
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.resolve(error);
  },
);

export default service;
