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

const position1 = {
  lat: -23.55675234096567,
  lng: -46.40948836105995,
};
const position2 = {
  lat: -23.527632661978437,
  lng: -46.7758956168826,
};

const position3 = {
  lat: -23.521082688335113,
  lng: -46.19686731075785,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDZ2Pc6z4je-boooUqFiyFaAFM_8UXdtEE",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={position1} options={{ label: "1" }} />
      <Marker position={position2} options={{ label: "2" }} />
      <Marker position={position3} options={{ label: "3" }} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
