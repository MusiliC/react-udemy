/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../context/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";

const Map = () => {
  const navigate = useNavigate();
  const { cities } = useCities();
  const {loading: loadingPosition, position: geoPosition, getPosition} = useGeolocation();

  const [mapPosition, setMapPosition] = useState([40, 0]);
  
 const [mapLat, mapLong] = useUrlPosition()

  useEffect(() => {
    if (mapLat && mapLong) setMapPosition([mapLat, mapLong]);
  }, [mapLat, mapLong]);

  useEffect(function(){
    if(geoPosition) setMapPosition([geoPosition.lat, geoPosition.lng])
  },[geoPosition])

  return (
    <div className={styles.mapContainer}>
   {!geoPosition && <Button type = 'position' onClick={getPosition}>
      {
        loadingPosition ? "Loading...." : "Use your Position"
      }
    </Button>}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city, i) => (
          <Marker position={[city.position.lat, city.position.lng]} key={i}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {       
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    }
   
  });
}
export default Map;
