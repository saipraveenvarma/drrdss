import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandslideSidebar from '../../Homepage/Landslide/LandslideSidebar/LandslideSidebar';
import ElevationData from '../../Homepage/Landslide/ElevationData/ElevationData';
import UnderConstruction from '../../UnderConstruction';
import './LandslideModule.css';

const LandslideModule = () => {
  return (
    <div className="landslide-module-container">
      <LandslideSidebar />
      <div className="main-content">
        <Routes>
          <Route path="ElevationData" element={<ElevationData />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </div>
    </div>
  );
};

export default LandslideModule;