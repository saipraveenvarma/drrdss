// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const navigate = useNavigate();

  // Check login status from localStorage on mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  // Login handler
  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/MenuPage');
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setShowLogoutBox(false);
    navigate('/LoginPage');
  };

  const toggleLogoutBox = () => {
    setShowLogoutBox((prev) => !prev);
  };

  return {
    isLoggedIn,
    showLogoutBox,
    login,
    logout,
    toggleLogoutBox,
  };
};

export default useAuth;