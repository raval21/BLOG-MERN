// src/services/authService.js
import axios from 'axios';

const API_URL = '/api/auth/';

export const signup = (email, password) => {
  return axios.post(API_URL + 'signup', {
    email,
    password,
  });
};
export const login = (email, password) => {
  return axios.post(API_URL + 'login', { email, password });
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
};
