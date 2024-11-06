import React, { useState, useEffect } from 'react';
import Header from '../Dashboard/Header/Header';
import Navbar from '../Dashboard/Navbar/Navbar';
import Home from '../Dashboard/Home/Home';
import Cyclone from '../Dashboard/Cyclone/Cyclone';
import Landslide from '../Dashboard/Landslide/Landslide';
import Earthquake from '../Dashboard/Earthquake/Earthquake';
import Cityfire from '../Dashboard/Cityfire/Cityfiire';
import RoadAccident from '../Dashboard/Roadaccident/Roadaccident';
import Flood from '../Dashboard/Flood/Flood';
import Footer from '../Dashboard/Footer/Footer';

function Dashboard() {
  const [activeView, setActiveView] = useState(
    localStorage.getItem('activeView') || 'Home'
  );

  useEffect(() => {
    localStorage.setItem('activeView', activeView);
  }, [activeView]);

  const renderView = () => {
    switch (activeView) {
      case 'Home':
        return <Home />;
      case 'Cyclone':
        return <Cyclone />;
      case 'Landslide':
        return <Landslide />;
      case 'Earthquake':
        return <Earthquake />;
      case 'City Fire':
        return <Cityfire />;
      case 'Road Accidents':
        return <RoadAccident />;
      case 'Flood':
        return <Flood />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <Navbar setActiveView={setActiveView} />
      {renderView()}
      <Footer />
    </div>
  );
}

export default Dashboard;