"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// Manually set the Leaflet icon URLs
const defaultIcon = new L.Icon({
  iconUrl: "/leaflet/marker-icon.png", // Adjust path to public folder
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const InteractiveMap = () => {
  const locations = [
    { name: "Nairobi, Kenya", position: [-1.286389, 36.817223] as LatLngExpression },
    { name: "Mombasa, Kenya", position: [-4.0435, 39.6682] as LatLngExpression },
    { name: "Kampala, Uganda", position: [0.3136, 32.5811] as LatLngExpression },
    { name: "Dar es Salaam, Tanzania", position: [-6.7924, 39.2083] as LatLngExpression },
    { name: "Kigali, Rwanda", position: [-1.9441, 30.0619] as LatLngExpression },
    { name: "Khartoum, Sudan", position: [15.5007, 32.5599] as LatLngExpression },
    { name: "Kinshasa, DRC", position: [-4.4419, 15.2663] as LatLngExpression },
    { name: "Bamako, Mali", position: [12.6392, -8.0029] as LatLngExpression },
    { name: "N'Djamena, Chad", position: [12.1348, 15.0557] as LatLngExpression },
    { name: "Maputo, Mozambique", position: [-25.9692, 32.5732] as LatLngExpression }
  ];

  const defaultCenter: LatLngExpression = [-1.286389, 36.817223];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-container padding-container">
        {/* <h2 className="text-4xl font-bold text-center mb-12">Our Global Network</h2> */}
        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
          <MapContainer center={defaultCenter} zoom={5} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position} icon={defaultIcon}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
