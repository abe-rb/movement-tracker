import { useEffect, useState } from "react";
import { useTasks } from "../api/getTasks";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLng } from "leaflet";
import Recenter from "./Recenter";
import MapMarker from "./MapMarker";

type LeafletMapProps = {
  nip: string;
};

function LeafletMap({ nip }: LeafletMapProps) {
  const { isPending, isError, data, error, status } = useTasks(nip);

  const [index, setIndex] = useState(0);

  const [center, setCenter] = useState<LatLng>({
    lat: -6.17511,
    lng: 106.865036,
  } as LatLng);

  useEffect(() => {
    if (status === "success") {
      setCenter(
        data[0].coordinates[Math.floor(data[0].coordinates.length / 2)]
      );
    }
  }, [status, data]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{error.message}</span>;
  }

  return (
    <>
      <button
        onClick={() => {
          const nextIndex = index - 1 < 0 ? data.length - 1 : index - 1;
          setIndex(nextIndex);
          setCenter(
            data[nextIndex].coordinates[
              Math.floor(data[nextIndex].coordinates.length / 2)
            ]
          );
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          const nextIndex = index + 1 > data.length - 1 ? 0 : index + 1;
          setIndex(nextIndex);
          setCenter(
            data[nextIndex].coordinates[
              Math.floor(data[nextIndex].coordinates.length / 2)
            ]
          );
        }}
      >
        &gt;
      </button>
      <MapContainer center={center} zoom={18} scrollWheelZoom={true}>
        <Recenter coordinate={center} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((res, index) => (
          <MapMarker task={res} key={index} />
        ))}
      </MapContainer>
    </>
  );
}

export default LeafletMap;
