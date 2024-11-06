import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet for custom marker
import './ImpactForecast.css';

// Initial view state
const INITIAL_VIEW_STATE = {
  longitude: 151.2093,
  latitude: -33.8688,
  zoom: 10,
};

const ImpactForecast = () => {
  const donutData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
      {
        data: [45, 30, 55, 70],
        backgroundColor: ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9'],
        hoverBackgroundColor: ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9'],
      },
    ],
  };

  const barData = {
    labels: ['0-90°', '90-180°', '180-270°', '270-360°'],
    datasets: [
      {
        label: 'Wind Direction Distribution',
        data: [10, 20, 30, 40],
        backgroundColor: '#034f84',
      },
    ],
  };

  const customMarker = L.icon({
    iconUrl: 'path/to/your/new-marker.png', // Replace with the correct marker image
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="wind-direction-container">
      <div className="map-container-WindDirection">
        <MapContainer
          center={[INITIAL_VIEW_STATE.latitude, INITIAL_VIEW_STATE.longitude]}
          zoom={INITIAL_VIEW_STATE.zoom}
          style={{ width: '100%', height: '400px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[INITIAL_VIEW_STATE.latitude, INITIAL_VIEW_STATE.longitude]} icon={customMarker}>
            <Popup>
              Wind Direction: Sydney
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="statistics-section">
        <div className="stat-card">
          <h3>Current Wind Direction</h3>
          <h1>180° (South)</h1>
          <p className="change positive">+10% from yesterday</p>
        </div>

        <div className="stat-card">
          <h3>Peak Direction</h3>
          <h1>90° (East)</h1>
          <p className="change negative">-5% in the last hour</p>
        </div>

        <div className="stat-card">
          <h3>Average Wind Direction</h3>
          <h1>135° (Southeast)</h1>
          <p className="change positive">+3% over 24 hours</p>
        </div>
      </div>

      <div className="charts-section">
        <div className="doughnut-chart">
          <h3>Wind Direction by Region</h3>
          <Doughnut data={donutData} />
        </div>

        <div className="bar-chart">
          <h3>Wind Direction Range</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default ImpactForecast;