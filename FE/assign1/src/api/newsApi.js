import axios from "axios";

const BASE_URL = "http://localhost:8080/api/news";

export const getNewsByStaff = (staffId) =>
  axios.get(`${BASE_URL}/staff/${staffId}`);

export const createNews = (staffId, data) =>
  axios.post(`${BASE_URL}/staff/${staffId}`, data);

export const updateNews = (id, staffId, data) =>
  axios.put(`${BASE_URL}/${id}/staff/${staffId}`, data);

export const deleteNews = (id, staffId) =>
  axios.delete(`${BASE_URL}/${id}/staff/${staffId}`);
