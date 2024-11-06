import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CycloneSidebar from '../../Homepage/Cyclone/CycloneSidebar/CycloneSidebar';
import CycloneDisturbanceTrack from '../../Homepage/Cyclone/CycloneDisturbanceTrack/CycloneDisturbanceTrack';
import ImpactForecast from '../../Homepage/Cyclone/ImpactForecast/ImpactForecast';
import UnderConstruction from '../../UnderConstruction'; 
import './CycloneModule.css';

const CycloneModule = () => {
  return (
    <div className="cyclone-module-container">
      <CycloneSidebar />
      <div className="main-content">
        <Routes>
          <Route path="CycloneDisturbanceTrack" element={<CycloneDisturbanceTrack />} />
          <Route path="ImpactForecast" element={<ImpactForecast />} />
          <Route path="*" element={<UnderConstruction />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default CycloneModule;