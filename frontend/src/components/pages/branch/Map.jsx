import React from "react";

const Map = ({ lat, long }) => {
  return (
    <div className="mb-16">
      <h2 className="mb-2 text-lg text-left font-bold font-roboto">
        Ubicación
      </h2>
      <iframe
        id="iframeId"
        height="400px"
        width="100%"
        src={`https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`}
      ></iframe>
    </div>
  );
};

export default Map;
