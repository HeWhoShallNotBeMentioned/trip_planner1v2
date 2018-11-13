const mapbox = require('mapbox-gl');
const { Marker } = require('mapbox-gl');

const iconURLs = {
  activities:
    'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Ball-Azure-icon.png',
  hotels: 'https://inclinition.com/wp-content/uploads/2016/11/marker-map.png',
  restaurants: 'http://simpleicon.com/wp-content/uploads/map-marker-20.png',
};

const buildMarker = function(type, coords) {
  let markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.backgroundSize = 'contain';
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  if (type === 'activity') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
  } else if (type === 'hotel') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
  } else if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
  }
  return new Marker(markerDomEl).setLngLat(coords);

  // Your Code Here
};

module.exports = buildMarker;
