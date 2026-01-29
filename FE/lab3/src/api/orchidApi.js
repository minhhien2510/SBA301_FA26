import axiosClient from "./axiosClient";

export const orchidApi = {
  getAll() {
    return axiosClient.get("/orchids");
  },

  getById(id) {
    return axiosClient.get(`/orchids/${id}`);
  },

  create(data) {
    return axiosClient.post("/orchids", data);
  },

  update(id, data) {
    return axiosClient.put(`/orchids/${id}`, data);
  },

  delete(id) {
    return axiosClient.delete(`/orchids/${id}`);
  },
};
