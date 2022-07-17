import api from '.';

const path = "api/token";

const login = data => {
  return api.get(`${path}/`, data);
};

const register = data => {
  return api.get(`${path}/reg`, data);
};

const refresh = data => {
  return api.post(`${path}/refresh/`, data);
};

export {
  login,
  register,
  refresh,
}