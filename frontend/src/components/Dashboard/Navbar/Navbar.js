import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaArrowRight } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook

const Navbar = ({ setActiveView }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(
    localStorage.getItem('activeView') || 'Home' // Set active button from localStorage
  ); 
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dropdownData = {
    Cyclone: {
      info: "Cyclones",
      points: ["Cyclone distrurbance track", "Ocean state information", "Historical Cyclone", "Awareness"],
      image: "./Banner/Cyclone.png",
      route: "/CycloneModule/CycloneDisturbanceTrack",
    },
    Landslide: {
      info: "Landslides",
      points: ["Elevation Data", "Vulnerable Locations", "Slope gradient", "Soil type and composition", "Fault lines", "Rainfall data", "Soil moisture", "Groundwater level", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Landslide.webp",
      route: "/LandslideModule/ElevationData",
    },
    Flood: {
      info: "Floods",
      points: ["Real-time rainfall", "Historical rainfall", "Forest rainfall", "Industrial maps", "Flood hazard maps", "Critical infrastructures", "Elevation maps", "Population density", "Land cover/Land use", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Flood.jpg",
      route: "",
    },
    Earthquake: {
      info: "Earthquakes",
      points: ["EQ magnitude", "Depth of focus", "Epicenter", "EQ intensity map", "EQ historical database", "Soil type and composition", "Elevation data", "Seismic sensors", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Earthquake.jpg",
      route: "",
    },
    "City Fire": {
      info: "City Fires",
      points: ["Industrial Data", "Temperature Index", "Precipitation Index", "Wind Speed", "Wind Direction", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Cityfire.png",
      route: "",
    },
    "Road Accidents": {
      info: "Road Accidents",
      points: ["Type of Road", "Traffic Network", "Vehicle Type", "Vehicle Speed/Acceleration", "Accident Database", "Road and Environment Conditions", "Geographical Position", "Triggers/Thresholds", "Alerts/Warning Level"],
      image: "./Banner/Roadaccident.webp",
      route: "",
    },
   
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setHoveredButton(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleButtonClick = (button) => {
    setActiveView(button);
    setActiveButton(button);
    localStorage.setItem('activeView', button); 
  };

  const handleKnowMoreClick = () => {
    if (hoveredButton) {
      const route = dropdownData[hoveredButton].route;
      navigate(route);
    }
  };

  return (
    <>
      <nav className="navbar-container">
        <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
          <span
            className={`nav-button ${activeButton === 'Home' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Home')}
          >
            Home
          </span>
          {Object.keys(dropdownData).map((button) => (
            <span
              key={button}
              className={`nav-button ${activeButton === button ? 'active' : ''}`}
              onClick={() => handleButtonClick(button)}
              onMouseEnter={() => setHoveredButton(button)}
            >
              {button}
            </span>
          ))}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className="info-bar">
          <p>EMPOWERING COMMUNITIES, SAFEGUARDING FUTURES</p>
        </div>
      </nav>

      <div className={`hover-box ${hoveredButton ? 'visible' : ''}`} ref={dropdownRef}>
        {hoveredButton && (
          <div>
            <div className="hover-content">
              <div className="hover-text">{dropdownData[hoveredButton].info}</div>
              <div className="hover-points">
                {dropdownData[hoveredButton].points.map((point, index) => (
                  <div key={index} className="point">
                    {point}
                  </div>
                ))}
              </div>
              <div className="hover-image">
                <img src={dropdownData[hoveredButton].image} alt={hoveredButton} />
              </div>
            </div>
            <button className="know-more-button" onClick={handleKnowMoreClick}>
              Know More <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;