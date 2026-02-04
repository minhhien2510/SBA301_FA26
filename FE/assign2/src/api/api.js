import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const login = (email, password) =>
  api.post('/auth/login', { email, password });

export const getAccounts = () => api.get('/accounts');
export const searchAccounts = (name) => api.get('/accounts/search', { params: { name } });
export const createAccount = (data) => api.post('/accounts', data);
export const updateAccount = (id, data) => api.put(`/accounts/${id}`, data);
export const deleteAccount = (id) => api.delete(`/accounts/${id}`);

export const getCategories = () => api.get('/categories');
export const getActiveCategories = () => api.get('/categories/active');
export const createCategory = (data) => api.post('/categories', data);
export const updateCategory = (id, data) => api.put(`/categories/${id}`, data);
export const deleteCategory = (id) => api.delete(`/categories/${id}`);

export const getTags = () => api.get('/tags');
export const createTag = (data) => api.post('/tags', data);
export const updateTag = (id, data) => api.put(`/tags/${id}`, data);
export const deleteTag = (id) => api.delete(`/tags/${id}`);

export const getPublicNews = () => api.get('/news/public');
export const getAllNews = () => api.get('/news');
export const searchNews = (params) => api.get('/news/search', { params });
export const getNewsByCreator = (accountId) => api.get(`/news/byCreator/${accountId}`);
export const createNews = (data) => api.post('/news', data);
export const updateNews = (id, data) => api.put(`/news/${id}`, data);
export const deleteNews = (id) => api.delete(`/news/${id}`);