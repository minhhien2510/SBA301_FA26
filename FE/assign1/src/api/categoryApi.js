import axios from "axios";

const API_URL = "http://localhost:8080/api/staff/categories";

export const getCategories = () => axios.get(API_URL);

export const searchCategories = (keyword) =>
  axios.get(`${API_URL}/search`, { params: { keyword } });

export const createCategory = (data) =>
  axios.post(API_URL, data);

export const updateCategory = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteCategory = (id) =>
  axios.delete(`${API_URL}/${id}`);
