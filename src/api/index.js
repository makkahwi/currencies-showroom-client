import axios from 'axios';
// import { BACKEND_URL } from '../../env';

const service = axios.create({
  // baseURL: BACKEND_URL || "http://localhost:8000/"
  baseURL: "http://localhost:8000/"
});

service.defaults.headers.get.Accept = 'application/json';
service.defaults.headers.put['Content-Type'] = 'application/json';

service.interceptors.request.use(config => {
  const jwt = localStorage.getItem('jwt');

  if (jwt != null) {
    config.headers["Authorization"] = `Bearer ${jwt}`;
  };

  return config;
}, e => Promise.reject(e));

let isAlreadyFetchingAccessToken = false;

service.interceptors.response.use(response => response, e => {
  console.log('Global Axios Error', e);

  if (!e.response) return Promise.reject(e);
  const { config, response: { status } } = e;
  const originalRequest = config;

  if (status === 401 && localStorage.getItem('refreshToken')) {
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
    };
  };

  return Promise.reject(e);
});

export default service;
