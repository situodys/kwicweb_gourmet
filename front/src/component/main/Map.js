/*global kakao*/
import React, { useEffect } from "react";

export const Map = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    // var markerPosition = new kakao.maps.LatLng(
    //   37.365264512305174,
    //   127.10676860117488
    // );

    // var marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(map);
  }, []);

  return (
    <div>
      <div
        id="map"
        className="rounded shadow-lg"
        style={{ width: "100%", aspectRatio: "1/1" }}
      ></div>
    </div>
  );
};

export default Map;
