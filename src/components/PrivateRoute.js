// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../services/authService';

const PrivateRoute = () => {
  const isAuthenticated = !!getToken(); // Check if user is authenticated by token

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
