import React from 'react';
import './Roadaccident.css'; 
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Roadaccidents = () => {
  const position = [-8.8747, 125.7275]; 

  return (
    <>
      <img 
        src="./Banner/Roadaccident.webp" 
        className="picture" 
        alt="A relevant description" 
      />      

      <div className="content-container">
        <img src='./Roadaccident1.jpg' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste Roadaccidentss</h2>
          <p>
          Road accidents in Timor Leste are a growing concern, particularly in urban centers and along key highways connecting rural areas. Contributing factors include poorly maintained roads, lack of traffic signals, reckless driving, speeding, and limited enforcement of traffic laws. Motorcycles are a common mode of transportation, but the absence of protective gear and helmets increases the risk of severe injuries. In rural regions, narrow and winding roads, combined with challenging terrain and weather conditions, make driving even more hazardous. Efforts are being made to improve road safety through infrastructure upgrades, public awareness campaigns, and stricter regulations to reduce the number of accidents and fatalities across the country.          </p>
        </div>
      </div>

      <div className="map-section">
        <h2>Map of Timor Leste</h2>
        <div className="map-container">
          <MapContainer center={position} zoom={8} className="leaflet-map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* All municipality markers have been removed */}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Roadaccidents;