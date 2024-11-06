import React from 'react';
import { FaHome } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './MenuHeader.css';

const MenuHeader = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleHomeClick = () => {
    navigate('/'); // Navigate to HomePage when clicked
  };

  return (
    <header>
      <div className="header-content">
        <img src="./timor.png" alt="Logo" className="logo" />
        <div className="text-container">
          <span className="header-text bold-text">DRRDSS</span>
          <span className="header-text">DISASTER RISK REDUCTION AND DECISION SUPPORT SYSTEM</span>
        </div>
      </div>
      <div className="icon-container">
        <FaHome className="header-icon" onClick={handleHomeClick} /> {/* Add onClick */}
      </div>
    </header>
  );
};

export default MenuHeader;