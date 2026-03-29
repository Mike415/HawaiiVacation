/**
 * DayMap — Maui Family Trip
 * Renders an interactive Google Map for a given day plan showing:
 * - Numbered markers for each waypoint
 * - A driving route connecting all stops
 * - A sidebar with drive time + distance for each leg
 */

import { useEffect, useRef, useState } from "react";
import { MapView } from "./Map";

export interface Waypoint {
  label: string;
  address: string;
  note?: string;
}

interface LegInfo {
  from: string;
  to: string;
  distance: string;
  duration: string;
}

interface DayMapProps {
  waypoints: Waypoint[];
  center: google.maps.LatLngLiteral;
  zoom?: number;
}

const COLORS = ["#E8714A", "#0A4A5C", "#7B9E6B", "#C4873A", "#5B7FA6", "#A0522D", "#2E8B57"];

export function DayMap({ waypoints, center, zoom = 11 }: DayMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [legs, setLegs] = useState<LegInfo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const buildRoute = (map: google.maps.Map) => {
    mapRef.current = map;
    if (waypoints.length < 2) {
      // Just drop a single marker
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: waypoints[0].address }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const pos = results[0].geometry.location;
          map.setCenter(pos);
          new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position: pos,
            title: waypoints[0].label,
          });
        }
      });
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: "#E8714A",
        strokeWeight: 4,
        strokeOpacity: 0.85,
      },
    });

    const origin = waypoints[0].address;
    const destination = waypoints[waypoints.length - 1].address;
    const intermediates = waypoints.slice(1, -1).map((w) => ({ location: w.address, stopover: true }));

    directionsService.route(
      {
        origin,
        destination,
        waypoints: intermediates,
        travelMode: window.google.maps.TravelMode.DRIVING,
        optimizeWaypoints: false,
      },
      (result, status) => {
        if (status === "OK" && result) {
          directionsRenderer.setDirections(result);

          // Add custom numbered markers
          const allLegs = result.routes[0].legs;
          const legInfos: LegInfo[] = [];

          allLegs.forEach((leg, i) => {
            legInfos.push({
              from: waypoints[i].label,
              to: waypoints[i + 1].label,
              distance: leg.distance?.text ?? "",
              duration: leg.duration?.text ?? "",
            });

            // Start marker for each leg
            const markerEl = document.createElement("div");
            markerEl.style.cssText = `
              width: 28px; height: 28px; border-radius: 50%;
              background: ${COLORS[i % COLORS.length]};
              color: white; font-weight: 700; font-size: 13px;
              display: flex; align-items: center; justify-content: center;
              border: 2px solid white;
              box-shadow: 0 2px 6px rgba(0,0,0,0.35);
              font-family: 'Lato', sans-serif;
            `;
            markerEl.textContent = String(i + 1);

            new window.google.maps.marker.AdvancedMarkerElement({
              map,
              position: leg.start_location,
              title: waypoints[i].label,
              content: markerEl,
            });

            // Add final destination marker
            if (i === allLegs.length - 1) {
              const lastEl = document.createElement("div");
              lastEl.style.cssText = `
                width: 28px; height: 28px; border-radius: 50%;
                background: ${COLORS[(i + 1) % COLORS.length]};
                color: white; font-weight: 700; font-size: 13px;
                display: flex; align-items: center; justify-content: center;
                border: 2px solid white;
                box-shadow: 0 2px 6px rgba(0,0,0,0.35);
                font-family: 'Lato', sans-serif;
              `;
              lastEl.textContent = String(i + 2);
              new window.google.maps.marker.AdvancedMarkerElement({
                map,
                position: leg.end_location,
                title: waypoints[i + 1].label,
                content: lastEl,
              });
            }
          });

          setLegs(legInfos);
        } else {
          setError("Could not load driving directions for this day.");
        }
      }
    );
  };

  // Reset when waypoints change
  const [mapKey, setMapKey] = useState(0);
  const prevWaypointsRef = useRef<string>("");
  useEffect(() => {
    const key = waypoints.map((w) => w.address).join("|");
    if (key !== prevWaypointsRef.current) {
      prevWaypointsRef.current = key;
      setMapKey((k) => k + 1);
      setLegs([]);
      setError(null);
    }
  }, [waypoints]);

  return (
    <div className="rounded-sm overflow-hidden" style={{ border: "1px solid #E8D5B0" }}>
      {/* Waypoint legend */}
      <div className="px-5 py-4 flex flex-wrap gap-3" style={{ background: "#FDFAF5", borderBottom: "1px solid #E8D5B0" }}>
        {waypoints.map((wp, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: COLORS[i % COLORS.length], fontFamily: "'Lato', sans-serif" }}
            >
              {i + 1}
            </div>
            <div>
              <span className="text-xs font-semibold" style={{ color: "#2C1A0E", fontFamily: "'Lato', sans-serif" }}>
                {wp.label}
              </span>
              {wp.note && (
                <span className="text-xs ml-1" style={{ color: "#8B7355" }}>— {wp.note}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Map */}
      <MapView
        key={mapKey}
        initialCenter={center}
        initialZoom={zoom}
        className="w-full h-64 md:h-80"
        onMapReady={buildRoute}
      />

      {/* Drive legs summary */}
      {legs.length > 0 && (
        <div className="px-5 py-3 flex flex-wrap gap-4" style={{ background: "#F5EDD8", borderTop: "1px solid #E8D5B0" }}>
          {legs.map((leg, i) => (
            <div key={i} className="flex items-center gap-2 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
              <span style={{ color: "#8B7355" }}>{leg.from} → {leg.to}</span>
              <span className="font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(10,74,92,0.1)", color: "#0A4A5C" }}>
                🚗 {leg.duration}
              </span>
              <span style={{ color: "#8B7355" }}>{leg.distance}</span>
            </div>
          ))}
        </div>
      )}
      {error && (
        <div className="px-5 py-3 text-xs" style={{ color: "#E8714A", background: "#FFF8F5" }}>
          {error}
        </div>
      )}
    </div>
  );
}
