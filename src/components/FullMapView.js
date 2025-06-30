'use client';

import { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './FullMapView.module.css';
import { MapPin } from 'lucide-react';

export default function FullMapView({ properties }) {
  const [selectedCoords, setSelectedCoords] = useState(null);

  // Group properties by lat/lng key
  const grouped = useMemo(() => {
    const map = {};
    properties.forEach((prop) => {
      const key = `${prop.lat},${prop.lng}`;
      if (!map[key]) map[key] = [];
      map[key].push(prop);
    });
    return map;
  }, [properties]);

  return (
    <div className={styles.container}>
      <MapContainer
        center={[22.9734, 78.6569]} // Center of India
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.entries(grouped).map(([key, group], idx) => {
          const [lat, lng] = key.split(',').map(Number);
          return (
            <Marker
              key={idx}
              position={[lat, lng]}
              eventHandlers={{
                click: () => setSelectedCoords(key),
              }}
            >
              <Popup>
                📍 {group.length} Property{group.length > 1 ? 'ies' : ''} here
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {selectedCoords && (
        <div className={styles.propertyList}>
          <h3>
            <MapPin size={16} /> Properties at {selectedCoords}
          </h3>
          {grouped[selectedCoords].map((prop, index) => (
            <div key={index} className={styles.card}>
              <img src={prop.image_url} alt={prop.title} />
              <div>
                <h4>{prop.title}</h4>
                <p>₹{prop.rent}/mo • {prop.bedrooms}BHK • {prop.area_sqft} sqft</p>
                <p>{prop.locality}, {prop.city}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
