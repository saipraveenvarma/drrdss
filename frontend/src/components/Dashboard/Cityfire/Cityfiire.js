import React from 'react';
import './Cityfire.css'; 
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Cityfire = () => {
  const position = [-8.8747, 125.7275]; 

  return (
    <>
      <img 
        src="./Banner/Cityfire.png" 
        className="picture" 
        alt="A relevant description" 
      />      

      <div className="content-container">
        <img src='./Cityfire1.png' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste Cityfires</h2>
          <p>
          Urban areas in Timor Leste, including the capital city Dili, face the risk of city fires due to several factors such as unregulated urban growth, dry weather conditions, and limited fire safety infrastructure. In densely populated neighborhoods, narrow roads and poorly maintained electrical systems can contribute to the spread of fires. Industrial zones and markets are particularly vulnerable, as they often lack adequate fire prevention systems. While firefighting units are active in the major cities, rural areas struggle with limited resources and delayed response times. The government and local authorities are working to raise public awareness, improve fire safety standards, and enhance emergency services to protect communities from the increasing risks of urban fires.          </p>
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

export default Cityfire;