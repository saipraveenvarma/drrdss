import React, { useState, useEffect } from 'react';
import './Home.css'; 
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configuring Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Home = () => {
  const position = [-8.8747, 125.7275]; 
  const [boundaryData, setBoundaryData] = useState(null);
  const [activeBoundary, setActiveBoundary] = useState("country");

  // Function to load GeoJSON data from a specified URL
  const loadGeoJSON = (url, type) => {
    setBoundaryData(null);
    setActiveBoundary(type);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBoundaryData(data);
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  };

  // Load the "Country" shape file by default when the component mounts
  useEffect(() => {
    loadGeoJSON(`${process.env.PUBLIC_URL}/DATA/OSMbased_adm0_boundary.json`, "country");
  }, []);

  // Base styling for each shape
  const boundaryStyle = {
    color: "#FF0000",
    weight: 2,
    fillOpacity: 0,
  };

  const onEachFeature = (feature, layer) => {
    let popupContent = "";
    if (activeBoundary === "country" && feature.properties) {
      const { ADM0, ADM_code, Municipio, PostoAdmin, Sucos, Aldeias } = feature.properties;
      popupContent = `
        <b>🗺️ Country:</b> ${ADM0 || "N/A"}<br />
        <b>📍 Code:</b> ${ADM_code || "N/A"}<br />
        <b>🏙️ Municipalities:</b> ${Municipio || "N/A"}<br />
        <b>📍 PostoAdmin:</b> ${PostoAdmin || "N/A"}<br />
        <b>🏘️ Sucos:</b> ${Sucos || "N/A"}<br />
        <b>🏡 Aldeias:</b> ${Aldeias || "N/A"}<br />
      `;
    } else if (activeBoundary === "municipality" && feature.properties) {
      const { ADM1, ADM_Code, area_sqkm, Population, Male_Pop, Female_Pop } = feature.properties;
      popupContent = `
        <b>🏙️ Municipality:</b> ${ADM1 || "N/A"}<br />
        <b>📍 Code:</b> ${ADM_Code || "N/A"}<br />
        <b>📏 Area (sq km):</b> ${area_sqkm || "N/A"}<br />
        <b>👥 Population:</b> ${Population || "N/A"}<br />
        <b>👨 Male Population:</b> ${Male_Pop || "N/A"}<br />
        <b>👩 Female Population:</b> ${Female_Pop || "N/A"}<br />
      `;
    } else if (activeBoundary === "sub-municipality" && feature.properties) {
      const { ADM2, ADM1, ADM_Code, area_sqkm } = feature.properties;
      popupContent = `
        <b>🏘️ Sub-Municipality:</b> ${ADM2 || "N/A"}<br />
        <b>🏙️ Municipality:</b> ${ADM1 || "N/A"}<br />
        <b>📍 Code:</b> ${ADM_Code || "N/A"}<br />
        <b>📏 Area (sq km):</b> ${area_sqkm || "N/A"}<br />
      `;
    }
    layer.bindPopup(popupContent);
  
    // Event listeners for changing fill opacity when popup is opened/closed
    layer.on({
      popupopen: () => {
        layer.setStyle({ fillOpacity: 0.5 }); // Active fill opacity
      },
      popupclose: () => {
        layer.setStyle({ fillOpacity: 0 }); // Reset fill opacity
      }
    });
  };

  return (
    <>
       <img 
        src="./view.webp" 
        className="picture" 
        alt="A relevant description" 
      />      

      <div className="content-container">
        <img src='./map1.png' alt="Map of Timor Leste" className="map-image" />
        <div className="text-content">
          <h2>About Timor Leste</h2>
          <p>
            Timor Leste, officially known as the Democratic Republic of Timor-Leste, 
            is a Southeast Asian nation located in the eastern half of the island of Timor. 
            It is known for its stunning beaches, rich culture, and resilient history. 
            The country gained independence from Indonesia in 2002 and is one of the newest 
            nations in the world. Its capital is Dili, which is a vibrant city with a mix 
            of Portuguese and local influences.
          </p>
        </div>
      </div>

 {/* Disaster Data Boxes */}
<div className="disaster-boxes">
  {[
    {
      title: "🌪️ Cyclone",
      color: "#e0f7fa",
      data: {
        "💨 Wind Speed": "120 km/h",
        "📍 Affected Areas": "5",
        "🔥 Intensity": "Severe",
        "⚠️ Warnings Issued": "12",
      },
    },
    {
      title: "🗻 Landslide",
      color: "#f1f8e9",
      data: {
        "📍 Affected Areas": "3",
        "🪨 Debris Volume": "500 m³",
        "🚨 Evacuations": "200",
        "💀 Fatalities": "2",
      },
    },
    {
      title: "🌊 Flood",
      color: "#e8f5e9",
      data: {
        "📈 Water Level Rise": "1.5 m",
        "👫 Affected People": "5000",
        "🚨 Evacuations": "300",
      },
    },
    {
      title: "🌍 Earthquake",
      color: "#fce4ec",
      data: {
        "🌡️ Magnitude": "6.5",
        "📏 Depth": "10 km",
        "🔁 Aftershocks": "15",
        "📍 Affected Areas": "2",
      },
    },
    {
      title: "🔥 City Fire",
      color: "#ffebee",
      data: {
        "🏢 Buildings Affected": "10",
        "🧑‍⚕️ Injuries": "15",
        "⏰ Response Time": "5 mins",
      },
    },
    {
      title: "🚗 Road Accidents",
      color: "#f3e5f5",
      data: {
        "🚨 Incidents Today": "3",
        "🧑‍⚕️ Injuries": "7",
        "💀 Fatalities": "1",
        "⏰ Response Time": "10 mins",
      },
    },
  ].map((disaster, i) => (
    <div className="disaster-box" key={i} style={{ backgroundColor: disaster.color }}>
      <h3>{disaster.title}</h3>
      {Object.entries(disaster.data).map(([key, value]) => (
        <p key={key}><b>{key}:</b> {value}</p>
      ))}
    </div>
  ))}
</div>

      <div className="map-section">
        <h2>Map of Timor Leste</h2>
        <div className="map-container">
          <MapContainer center={position} zoom={8} className="leaflet-map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Render GeoJSON shape if boundaryData is loaded */}
            {boundaryData && (
              <GeoJSON data={boundaryData} style={boundaryStyle} onEachFeature={onEachFeature} />
            )}

            {/* Control Box */}
            <div className="control-box">
              <button onClick={() => loadGeoJSON(`${process.env.PUBLIC_URL}/DATA/OSMbased_adm0_boundary.json`, "country")}>
                Country
              </button>
              <button onClick={() => loadGeoJSON(`${process.env.PUBLIC_URL}/DATA/OSMbased_adm1_boundary.json`, "municipality")}>
                Municipalities-14
              </button>
              <button onClick={() => loadGeoJSON(`${process.env.PUBLIC_URL}/DATA/OSMbased_adm2_boundary.json`, "sub-municipality")}>
                Sub-Municipalities-71
              </button>
            </div>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Home;