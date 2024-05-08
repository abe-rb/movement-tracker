import haversine from "haversine-distance";

function resultHandler(rows) {
  const latlng = rows.map((r) => ({
    lat: r["latitude"],
    lng: r["longitude"],
  }));

  const diff = latlng.map((r, i, a) => {
    if (!a[i - 1]) return 0;
    return haversine(r, a[i - 1]);
  });

  const grouped = [];
  let group = [];
  let start = rows[0]["dateRec"];
  for (let i = 0; i < latlng.length; i++) {
    if (diff[i] < 500) {
      group.push(latlng[i]);
    } else {
      grouped.push({ coordinates: group, start, end: rows[i]["dateRec"] });
      group = [];
      start = rows[i]["dateRec"];
      group.push(latlng[i]);
    }
  }
  grouped.push({
    coordinates: group,
    start,
    end: rows[rows.length - 1]["dateRec"],
  });

  return grouped;
}

export default resultHandler;
