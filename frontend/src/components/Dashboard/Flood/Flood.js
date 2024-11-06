import React from 'react';
import './Flood.css'; 
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Flood = () => {
  const position = [-8.8747, 125.7275]; 

  return (
    <>
      <img 
        src="./Banner/Flood.jpg" 
        className="picture" 
        alt="A relevant description" 
      />      

      <div className="content-container">
        <img src='./Flood1.jpg' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste Floods</h2>
          <p>
          Floods are a recurrent natural hazard in Timor Leste, particularly during the wet season from November to April. The country’s steep terrain, combined with deforestation and poor drainage systems, makes it vulnerable to flash floods. Heavy rainfall often overwhelms rivers and streams, causing water to overflow into nearby villages and agricultural areas. Urban regions, including the capital city Dili, experience frequent waterlogging due to inadequate infrastructure. Flooding not only disrupts transportation and livelihoods but also increases the risk of waterborne diseases. The government, along with international partners, is working to improve flood resilience through better early-warning systems, infrastructure development, reforestation projects, and public education to minimize the impact of future floods.          </p>
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

export default Flood;