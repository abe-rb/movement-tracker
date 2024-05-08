import { Task } from "../types/Task";
import { Marker, Polyline, Popup } from "react-leaflet";

type MapMarkerProps = {
  task: Task;
};

function MapMarker({ task }: MapMarkerProps) {
  if (task.coordinates.length < 2) {
    return (
      <Marker position={task.coordinates[0]}>
        <Popup>{new Date(task.start).toString()}</Popup>
      </Marker>
    );
  }
  return (
    <>
      <Marker
        position={task.coordinates[Math.floor(task.coordinates.length / 2)]}
      >
        <Popup>
          <p>
            {new Date(task.start).toString()} - {new Date(task.end).toString()}
          </p>
        </Popup>
      </Marker>
      <Polyline positions={task.coordinates}>
        <Popup>
          <p>
            {new Date(task.start).toString()} - {new Date(task.end).toString()}
          </p>
        </Popup>
      </Polyline>
    </>
  );
}

export default MapMarker;
