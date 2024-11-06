import React from 'react';
import './Landslide.css'; 
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Landslide = () => {
  const position = [-8.8747, 125.7275]; 

  return (
    <>
      <img 
        src="./Banner/Landslide.webp" 
        className="picture" 
        alt="A relevant description" 
      />      

      <div className="content-container">
        <img src='./lanslide1.jpg' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste Landslides</h2>
          <p>
Timor Leste is highly prone to landslides due to its rugged mountainous terrain, heavy rainfall, and unstable soil conditions. These landslides occur most frequently during the wet season, particularly in regions with steep slopes and poor vegetation cover. Intense rainfall saturates the soil, causing it to loosen and slide, which can block roads, damage infrastructure, and isolate remote villages. Human activities like deforestation and improper land use further increase the risk of landslides. The government of Timor Leste is focusing on improving disaster management efforts by monitoring high-risk zones, promoting reforestation, and implementing early warning systems to protect communities from potential landslide hazards.          </p>
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
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Landslide;