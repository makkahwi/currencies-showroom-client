import axios from 'axios';
import app from '../../main';
import store from '../../store';

const baseURL = "https://currencies-showroom-suhaib.herokuapp.com/"

const service = axios.create({
  baseURL
});

service.defaults.headers.get.Accept = 'application/json';
service.defaults.headers.put['Content-Type'] = 'application/json';

service.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt');

  if (jwt != null) {
    config.headers["Authorization"] = `Bearer ${jwt}`;
  }
  return config;
}, (err) => Promise.reject(err));

let isAlreadyFetchingAccessToken = false;

service.interceptors.response.use((response) => response, (error) => {
  console.log('ERROR', error);

  if (!error.response) return Promise.reject(error);
  const { config, response: { status } } = error;
  const originalRequest = config;

  if (status === 401 && localStorage.getItem('refreshToken')) {
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;

      store.dispatch('api/token/refresh').then((res) => {
        isAlreadyFetchingAccessToken = false;
        return originalRequest;
      });
    }
  }
  return Promise.reject(error);
});

service.interceptors.request.use((config) => {
  app.$Progress.start();
  return config;
});

service.interceptors.response.use((response) => {
  app.$Progress.finish();
  return response;
});

export default service;
