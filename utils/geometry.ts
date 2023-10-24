/**
 * Assumes that the Earth is flat to make things simple because Turf cannot be
 * used because of server-side rendering and weird polyfills.
*/
export function getAveragePointOfMostExtremeCoordinates(
  geoPoints: google.maps.LatLngLiteral[]): google.maps.LatLngLiteral {
  if(geoPoints.length === 0)
    throw new Error('no geo points given; cannot compute average');

  const latitudes = geoPoints.map(gp => gp.lat);
  const longitudes = geoPoints.map(gp => gp.lng);

  const maxLatitude = Math.max(...latitudes);
  const minLatitude = Math.min(...latitudes);
  const maxLongitude = Math.max(...longitudes);
  const minLongitude = Math.min(...longitudes);

  return {
    lat: (maxLatitude + minLatitude) / 2,
    lng: (maxLongitude + minLongitude) / 2,
  };
}

/**
 * Turf's center() cannot be used (confer documentation of getAveragePointOfMostExtremeCoordinates()).
 *
 * Google maps' spherical.computeDistanceBetween() cannot be used for this because
 * loading spherical requires an await but the default zoom level needs to be
 * available synchronously.
 */
export function getDistanceBetweenPoints(a: google.maps.LatLngLiteral, b: google.maps.LatLngLiteral) {
  const distanceY = Math.abs(a.lat - b.lat) * 110574;
  const distanceX = Math.abs(a.lng - b.lng) * (111320 * Math.cos(degreesToRad(a.lat)));

  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  return distance;
}

function degreesToRad(degrees: number) {
  return degrees / 360 * 2 * Math.PI;
}
