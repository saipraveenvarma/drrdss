import React, { useState, useEffect } from "react";
import { FaUserCircle, FaThLarge } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  // Check login status and email on component load
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    const email = localStorage.getItem("userEmail") || "";
    setIsLoggedIn(loggedInStatus);
    setUserEmail(email);
  }, []);

  const handleHomeClick = () => {
    navigate(isLoggedIn ? "/MenuPage" : "/LoginPage");
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setShowLogoutBox((prev) => !prev);
    } else {
      navigate("/LoginPage");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setShowLogoutBox(false);
    navigate("/LoginPage");
  };

  return (
    <header>
      <div className="header-content">
        <img src="./timor.png" alt="Logo" className="logo" />
        <div className="text-container">
          <span className="header-text bold-text">DRRDSS</span>
          <span className="header-text">
            DISASTER RISK REDUCTION AND DECISION SUPPORT SYSTEM
          </span>
        </div>
      </div>
      <div className="icon-container">
        {isLoggedIn && (
          <FaThLarge className="header-icon" onClick={handleHomeClick} />
        )}
        <div className="user-icon-wrapper">
          <FaUserCircle className="header-icon" onClick={handleUserIconClick} />
          {showLogoutBox && isLoggedIn && (
            <div className="logout-box">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="user-image"
              />
              <span className="user-email">{userEmail}</span>
              <span className="user-name">Admin</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
