import api from '.';

const path = "currencies";

const getAll = params => {
  return api.get(`${path}/`, { params });
};

const get = id => {
  return api.get(`${path}/${id}`);
};

const create = data => {
  return api.post(`${path}/create/`, data);
};

const update = (id, data) => {
  return api.put(`${path}/update/${id}`, data);
};

const remove = id => {
  return api.delete(`${path}/delete/${id}`);
};

export {
  getAll,
  get,
  create,
  update,
  remove
}