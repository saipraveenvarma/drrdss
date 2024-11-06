// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check login status

  return isLoggedIn ? children : <Navigate to="/LoginPage" replace />;
};

export default ProtectedRoute;