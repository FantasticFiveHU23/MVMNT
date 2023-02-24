import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../styles/LocalFindsPage/LocalMapsStyle.css'
const containerStyle = {
  width: '600px',
  height: '600px',
//   borderRadius: '30px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export function LocalMaps() {
  return (
    <div className="google-maps">
        <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker position={center} />
        </GoogleMap>
        </LoadScript>
    </div>
  );
}