import React, {useEffect, useRef, useState} from 'react';
import Script from 'next/script';
import {PolygonRes} from '@/types';


interface Props {
  center: google.maps.LatLngLiteral;
  zoom: number;
  markerDataArr: MarkerProps[];
  polygon: PolygonRes | null;
}

export interface MarkerProps {
  position: google.maps.LatLngLiteral;
  polygon: PolygonRes;
  iconUrl: string;
  labelText: string;
  onClick?: () => void;
}

export default function GoogleMapsComponent({center, zoom, markerDataArr, polygon}: Props) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapBounds, setMapBounds] = useState<google.maps.LatLngBounds | undefined>(undefined);
  const markers = useRef<google.maps.Marker[]>([]);
  const drawnPolygon = useRef<google.maps.Polygon | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear old listener (if any).
    if(map !== null)
      google.maps.event.clearListeners(map, 'bounds_changed');

    if(typeof window !== 'undefined' && mapRef.current !== null) {
      window.initMap = function() {
        const newMap = new google.maps.Map(mapRef.current!, {
          center,
          zoom,
          fullscreenControl: false,
          gestureHandling: 'greedy',
        });

        newMap.addListener('bounds_changed', () => setMapBounds(newMap.getBounds()));

        setMap(newMap);
      };
      if(typeof google !== 'undefined')
        window.initMap();
    }
  }, [mapRef]);

  useEffect(() => {
    if(map === null || mapBounds === undefined)
      return;

    (async function() {
      const {Marker} = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;

      clearMarkers();

      markers.current = markerDataArr
        .filter(markerData =>
          markerData.polygon.filter(p => mapBounds.contains(p)).length === markerData.polygon.length)
        .map(markerData => {
          const marker = new Marker({
            position: markerData.position,
            icon: {
              url: markerData.iconUrl,
              labelOrigin: {
                equals: () => false,
                x: 25,
                y: 63,
              },
            },
            label: {
              text: markerData.labelText,
              fontSize: '24px',
              fontWeight: 'bold',
            },
            map,
          });

          if(markerData.onClick !== undefined)
            marker.addListener('click', markerData.onClick);

          return marker;
        });
    })().catch(console.error);
  }, [map, mapBounds, markerDataArr]);

  useEffect(() => {
    // Clear previously drawn polygon (if any).
    if(drawnPolygon.current !== null)
      drawnPolygon.current.setMap(null);

    if(map === null || polygon === null)
      return;

    drawnPolygon.current = new google.maps.Polygon({
      paths: polygon,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    });

    drawnPolygon.current.setMap(map);
  }, [map, polygon]);

  function clearMarkers() {
    markers.current.map(marker => marker.setMap(null));
  }

  return (
    <div ref={mapRef} style={{width: '100%', height: '100%'}}>
      {/* Google Maps Script */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`}
        strategy='afterInteractive'
      />
      {/* Map container */}
      <div id='map' style={{width: '100%', height: '100%'}}></div>
    </div>
  );
}
