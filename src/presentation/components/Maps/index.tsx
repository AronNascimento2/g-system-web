import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -23.497949106475172,
  lng: -46.50588362402262,
};



const Maps = ({ usuarios }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDZ2Pc6z4je-boooUqFiyFaAFM_8UXdtEE",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {usuarios?.map((usuario, index) => (
        <Marker
          key={index}
          position={{ lat: usuario.latitude, lng: usuario.longitude }}
          options={{ label: usuario.label }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Maps);
