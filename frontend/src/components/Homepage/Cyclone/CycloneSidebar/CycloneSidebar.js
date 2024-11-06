import React, { useState, useEffect, useMemo } from 'react';
import './CycloneSidebar.css';
import { 
  FaChevronLeft, FaChevronRight, FaThLarge, 
  FaHome, FaUserCircle, FaCaretDown, FaCaretUp 
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const CycloneSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activePath, setActivePath] = useState('');
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const [isDataPanelOpen, setIsDataPanelOpen] = useState(false);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(() => [
    { icon: '🌪️', label: 'Cyclone Disturbance Track', path: '/CycloneModule/CycloneDisturbanceTrack' },
    { icon: '📍', label: 'Impact Forecast', path: '/CycloneModule/ImpactForecast' },
    { icon: '🌊', label: 'Ocean State Information', path: '/CycloneModule/OceanStateInformation' },
    { icon: '⚖️', label: 'Comparison', path: '/CycloneModule/Comparison' },
    { icon: '🗓️', label: 'Historical Cyclone', path: '/CycloneModule/HistoricalCyclone' },
    { icon: '🗺️', label: 'Report', path: '/CycloneModule/Report' },
    { icon: '📢', label: 'Awareness', path: '/CycloneModule/Awareness' },
    { 
      icon: '⚠️', 
      label: 'Data Panel',
      path: null,
      subsections: [
        { icon: '📝', label: 'Bulletin Entry', path: '/CycloneModule/DataPanel/BulletinEntry' },
        { icon: '📍', label: 'Cyclone Track', path: '/CycloneModule/DataPanel/CycloneTrack' },
        { icon: '📜', label: 'Historical Cyclone', path: '/CycloneModule/DataPanel/HistoricalCyclone' },
        { icon: '📊', label: 'Impact - Historical Cyclone', path: '/CycloneModule/DataPanel/Impact-HistoricalCyclone' },
        { icon: '📁', label: 'Cyclone Report Upload', path: '/CycloneModule/DataPanel/CycloneReportUpload' },
        { icon: '⬆️', label: 'Upload JTWC', path: '/CycloneModule/DataPanel/UploadJTWC' },
        { icon: '🛑', label: 'Cyclone Awareness', path: '/CycloneModule/DataPanel/CycloneAwareness' },
      ],
    },
   
  ], []);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setIsCollapsed(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = (path) => {
    setActivePath(path);
    if (path) navigate(path);
  };

  const toggleDataPanel = () => setIsDataPanelOpen(!isDataPanelOpen);

  const handleSubsectionClick = (path) => {
    setActivePath(path);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/LoginPage');
  };

  const toggleLogoutBox = () => setShowLogoutBox(!showLogoutBox);

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="arrow-icon-wrapper" onClick={toggleSidebar}>
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </div>

      <div className="menu-button-wrapper">
        <div className="icon-container">
          <FaUserCircle className="header-icon" onClick={toggleLogoutBox} />
          {showLogoutBox && isLoggedIn && (
            <div className="logout-box">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="user-image"
              />
              <span className="user-name">Admin</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          <FaThLarge className="header-icon" onClick={() => navigate('/MenuPage')} />
          <FaHome className="header-icon" onClick={() => navigate('/')} />
        </div>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <button
              className={`sidebar-button ${activePath === item.path ? 'active' : ''}`}
              onClick={() => item.subsections ? toggleDataPanel() : handleButtonClick(item.path)}
            >
              <span className="icon">{item.icon}</span>
              {!isMobile && (
                <span className={`label ${isCollapsed ? 'hidden' : ''}`}>
                  {item.label}
                </span>
              )}
              {item.subsections && (
                <span className="dropdown-icon">
                  {isDataPanelOpen ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              )}
            </button>

            {item.subsections && isDataPanelOpen && (
              <ul className={`dropdown-menu ${isDataPanelOpen ? 'active' : ''}`}>
                {item.subsections.map((subItem, subIndex) => (
                  <li key={subIndex} className="sidebar-item dropdown-item">
                    <button
                      className={`sidebar-button ${
                        activePath === subItem.path ? 'active' : ''
                      }`}
                      onClick={() => handleSubsectionClick(subItem.path)}
                    >
                      <span className="icon">{subItem.icon}</span> {/* Render the icon */}
                      <span className={`label ${isCollapsed ? 'hidden' : ''}`}>
                        {subItem.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CycloneSidebar;