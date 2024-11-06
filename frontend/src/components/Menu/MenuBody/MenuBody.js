import React from 'react';
import { FaWind, FaMountain, FaGlobe, FaFireAlt, FaCarCrash, FaWater } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './MenuBody.css';

const MenuBody = () => {
  const navigate = useNavigate(); // Initialize the hook

  const menuItems = [
    { icon: <FaWind />, labeltext: 'Cyclone', className: 'box-cyclone', route: '/CycloneModule/CycloneDisturbanceTrack', backgroundImage: '/Banner/Cyclone.png' },
    { icon: <FaMountain />, labeltext: 'Landslide', className: 'box-landslide', route: '/LandslideModule/ElevationData', backgroundImage: '/Banner/Landslide.webp' },
    { icon: <FaWater />, labeltext: 'Flood', className: 'box-flood', backgroundImage: '/Banner/Flood.jpg' },
    { icon: <FaGlobe />, labeltext: 'Earthquake', className: 'box-earthquake', backgroundImage: '/Banner/Earthquake.jpg' },
    { icon: <FaFireAlt />, labeltext: 'City Fire', className: 'box-fire', backgroundImage: '/Banner/Cityfire.png' },
    { icon: <FaCarCrash />, labeltext: 'Road Accidents', className: 'box-accidents', backgroundImage: '/Banner/Roadaccident.webp' },
  ];

  const handleNavigation = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="menu-body">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`box ${item.className}`}
          style={{ backgroundImage: `url(${item.backgroundImage})` }} // Set background image directly
          onClick={() => handleNavigation(item.route)} // Trigger navigation on click
        >
          <div className="overlay" /> {/* Add overlay */}
          <div className="icon">{item.icon}</div>
          <div className="labeltext">{item.labeltext}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuBody;