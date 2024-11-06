import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet for custom marker
import './CycloneDisturbanceTrack.css';

// Initial view state
const INITIAL_VIEW_STATE = {
  longitude: 125.7275,
  latitude: -8.8742,
  zoom: 8,
};

const CycloneDisturbanceTrack = () => {
  const donutData = {
    labels: ['Asia', 'Europe', 'Americas'],
    datasets: [
      {
        data: [1230, 6790, 1010],
        backgroundColor: ['#2f5d62', '#f4a261', '#2a9d8f'],
        hoverBackgroundColor: ['#2f5d62', '#f4a261', '#2a9d8f'],
      },
    ],
  };

  const barData = {
    labels: ['10-20 km/h', '20-30 km/h', '30-40 km/h', '40+ km/h'],
    datasets: [
      {
        label: 'Wind Speed Distribution',
        data: [25, 15, 10, 8],
        backgroundColor: '#0077b6',
      },
    ],
  };

  // Custom marker icon
  const customMarker = L.icon({
    iconUrl: 'path/to/your/custom-marker.png', // Replace with your custom marker image URL
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  });

  return (
    <div className="wind-speed-cyclone-container">
      {/* Leaflet Map Section */}
      <div className="map-container-WindSpeedCyclone">
        <MapContainer
          center={[INITIAL_VIEW_STATE.latitude, INITIAL_VIEW_STATE.longitude]}
          zoom={INITIAL_VIEW_STATE.zoom}
          style={{ width: '100%', height: '400px' }} // Map styles
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[INITIAL_VIEW_STATE.latitude, INITIAL_VIEW_STATE.longitude]} icon={customMarker}>
            <Popup>
              Wind Speed Location: Timor-Leste
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Statistics and Charts Section */}
      <div className="statistics-section">
        <div className="stat-card">
          <h3>Current Wind Speed</h3>
          <h1>28 km/h</h1>
          <p className="change positive">+5% from yesterday</p>
        </div>

        <div className="stat-card">
          <h3>Peak Wind Speed</h3>
          <h1>42 km/h</h1>
          <p className="change positive">+2% in the last hour</p>
        </div>

        <div className="stat-card">
          <h3>Average Wind Speed</h3>
          <h1>22 km/h</h1>
          <p className="change negative">-3% over 24 hours</p>
        </div>
      </div>

      <div className="charts-section">
        <div className="doughnut-chart">
          <h3>Wind Speed by Region</h3>
          <Doughnut data={donutData} />
        </div>

        <div className="bar-chart">
          <h3>Wind Speed Range</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default CycloneDisturbanceTrack;