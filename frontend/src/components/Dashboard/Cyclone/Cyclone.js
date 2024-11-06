import React from 'react';
import './Cyclone.css'; 
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Cyclone = () => {
  const position = [-8.8747, 125.7275]; 

  return (
    <>
      <img 
        src="./Banner/Cyclone.png" 
        className="picture" 
        alt="A relevant description" 
      />      

      <div className="content-container">
        <img src='./Cyclone1.jpg' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste Cyclones</h2>
          <p>
          Timor Leste, situated in the tropical zone, is occasionally impacted by cyclones, particularly during the wet season from November to April. Although it experiences fewer cyclones compared to countries like Australia or Indonesia, the storms that do occur bring heavy rainfall, strong winds, and flooding. Coastal regions and low-lying areas are especially vulnerable to storm surges and landslides triggered by the intense rains. Cyclones also disrupt agriculture and fishing activities, critical for the country’s economy. Timor Leste has been working to enhance disaster preparedness, using early warning systems to alert communities and mitigate cyclone-related damage.
          </p>
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

export default Cyclone;