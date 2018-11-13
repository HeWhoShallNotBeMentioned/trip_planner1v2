const buildMarker = require('./marker');
const mapboxgl = require('mapbox-gl');
const { Marker } = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiY3VuZGVyd29vZG1uIiwiYSI6ImNqbWk1dGFsYTAxa2YzcW9jY2FkdThramEifQ.IDp26x6pnPbrJntBnG2-5w';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('restaurant', [-87.6358, 41.889]);
marker.addTo(map);
