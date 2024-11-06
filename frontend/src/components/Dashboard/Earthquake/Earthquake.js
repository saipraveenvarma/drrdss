import React from 'react';
import './Earthquake.css'; 
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Earthquake = () => {
  const position = [-8.8747, 125.7275]; 

  return (
    <>
      <img 
        src="./Banner/Earthquake.jpg" 
        className="picture" 
        alt="A relevant description" 
      />      

      <div className="content-container">
        <img src='./Earthquake1.png' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste Earthquakes</h2>
          <p>
          Timor Leste is located near the convergence of the Indo-Australian and Eurasian tectonic plates, making it vulnerable to seismic activities. Earthquakes in the region vary in magnitude, with occasional strong tremors capable of causing significant damage to infrastructure and triggering landslides in mountainous areas. Although not as frequent as other disasters, these earthquakes pose a threat to both urban and rural communities. The capital city, Dili, and other populated areas are working to strengthen buildings to withstand seismic events. The government, along with international partners, is developing earthquake monitoring systems, preparedness programs, and public awareness campaigns to minimize risks and ensure rapid response in case of future seismic events.          </p>
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

export default Earthquake;