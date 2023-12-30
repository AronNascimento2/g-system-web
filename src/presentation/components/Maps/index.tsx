import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Maps = ({ usuarios }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDZ2Pc6z4je-boooUqFiyFaAFM_8UXdtEE",
  });

  const [userLocations, setUserLocations] = useState([]);

  useEffect(() => {
    // Função para converter endereço em coordenadas usando Geocoding API
    const geocodeAddress = async () => {
      const geocoder = new window.google.maps.Geocoder();
      const locations = [];

      for (const usuario of usuarios) {
        const { endereco, cep } = usuario;
        const address = `${endereco}, ${cep}`;

        await new Promise((resolve) => {
          geocoder.geocode({ address }, (results, status) => {
            if (status === "OK") {
              const { lat, lng } = results[0].geometry.location;
              locations.push({ lat: lat(), lng: lng() });
            }
            resolve();
          });
        });
      }

      setUserLocations(locations);
    };

    if (isLoaded && usuarios) {
      geocodeAddress();
    }
  }, [isLoaded, usuarios]);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: -23.574257076268832,
    lng: -46.55420580479616,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {userLocations.map((location, index) => (
        <Marker key={index} position={location} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Maps);
