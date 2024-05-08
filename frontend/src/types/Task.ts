import { LatLng } from "leaflet";

export type Task = {
  coordinates: LatLng[];
  start: Date;
  end: Date;
};
