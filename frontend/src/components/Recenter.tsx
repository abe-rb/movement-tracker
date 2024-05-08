import { LatLng } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

type RecenterProps = {
  coordinate: LatLng;
};

function Recenter({ coordinate }: RecenterProps) {
  const map = useMap();
  useEffect(() => {
    map.setView(coordinate);
  }, [coordinate, map]);
  return null;
}

export default Recenter;
