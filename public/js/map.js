mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: [83.207731, 23.117942], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

console.log(coordinates);

// const marker = new mapboxgl.Marker()
// .setLngLat([12.554729, 55.70651])
// .addTo(map);