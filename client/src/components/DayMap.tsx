/**
 * DayMap — Maui Family Trip
 * Uses Leaflet.js + OpenStreetMap tiles with hardcoded lat/lng coordinates
 * for every waypoint. OSRM public routing API draws the real driving route.
 * No API key required. Always zooms correctly to Maui.
 */

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface Waypoint {
  label: string;
  address: string; // kept for "View Full Route" Google Maps link
  note?: string;
  driveTime?: string;
  driveDist?: string;
  lat: number;
  lng: number;
}

interface DayMapProps {
  waypoints: Waypoint[];
}

const MARKER_COLORS = ["#E8714A", "#0A4A5C", "#7B9E6B", "#C4873A", "#5B7FA6", "#A0522D", "#2E8B57"];

function createNumberedIcon(index: number, color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 28px; height: 28px;
      background: ${color};
      border: 2px solid white;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 700; font-size: 12px;
      font-family: Lato, sans-serif;
      box-shadow: 0 2px 6px rgba(0,0,0,0.35);
    ">${index + 1}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
}

async function fetchOSRMRoute(coords: [number, number][]): Promise<[number, number][] | null> {
  try {
    const coordStr = coords.map(([lat, lng]) => `${lng},${lat}`).join(";");
    const url = `https://router.project-osrm.org/route/v1/driving/${coordStr}?overview=full&geometries=geojson`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.code !== "Ok" || !data.routes?.[0]) return null;
    // GeoJSON coords are [lng, lat] — swap to [lat, lng] for Leaflet
    return data.routes[0].geometry.coordinates.map(([lng, lat]: [number, number]) => [lat, lng]);
  } catch {
    return null;
  }
}

function buildDirectionsUrl(waypoints: Waypoint[]): string {
  const parts = waypoints.map((w) => encodeURIComponent(w.address));
  return `https://www.google.com/maps/dir/${parts.join("/")}`;
}

export function DayMap({ waypoints }: DayMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const [routeLoaded, setRouteLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || !waypoints || waypoints.length === 0) return;

    // Clean up any existing map instance
    if (leafletMap.current) {
      leafletMap.current.remove();
      leafletMap.current = null;
    }
    setRouteLoaded(false);

    const coords: [number, number][] = waypoints.map((w) => [w.lat, w.lng]);

    // Initialize map
    const map = L.map(mapRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    leafletMap.current = map;

    // OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Add numbered markers with popups
    waypoints.forEach((wp, i) => {
      const icon = createNumberedIcon(i, MARKER_COLORS[i % MARKER_COLORS.length]);
      L.marker([wp.lat, wp.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: Lato, sans-serif; min-width: 140px;">
            <strong style="color: #2C1A0E;">${wp.label}</strong>
            ${wp.note ? `<br/><span style="color: #8B7355; font-size: 12px;">${wp.note}</span>` : ""}
            ${wp.driveTime ? `<br/><span style="color: #0A4A5C; font-size: 12px;">🚗 ${wp.driveTime}${wp.driveDist ? ` · ${wp.driveDist}` : ""}</span>` : ""}
          </div>`
        );
    });

    // Fit map to markers first (instant feedback)
    const bounds = L.latLngBounds(coords);
    map.fitBounds(bounds, { padding: [40, 40] });

    // Fetch OSRM route and draw polyline
    fetchOSRMRoute(coords).then((routeCoords) => {
      if (!leafletMap.current) return;
      if (routeCoords && routeCoords.length > 1) {
        L.polyline(routeCoords, {
          color: "#E8714A",
          weight: 4,
          opacity: 0.85,
          lineJoin: "round",
        }).addTo(leafletMap.current);
      } else {
        // Fallback: straight lines between waypoints
        L.polyline(coords, {
          color: "#E8714A",
          weight: 3,
          opacity: 0.7,
          dashArray: "6 6",
        }).addTo(leafletMap.current);
      }
      setRouteLoaded(true);
    });

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waypoints]);

  if (!waypoints || waypoints.length === 0) return null;

  const directionsUrl = buildDirectionsUrl(waypoints);

  return (
    <div className="rounded-sm overflow-hidden" style={{ border: "1px solid #E8D5B0" }}>
      {/* Waypoint legend */}
      <div
        className="px-5 py-4 flex flex-wrap gap-3"
        style={{ background: "#FDFAF5", borderBottom: "1px solid #E8D5B0" }}
      >
        {waypoints.map((wp, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: MARKER_COLORS[i % MARKER_COLORS.length], fontFamily: "'Lato', sans-serif" }}
            >
              {i + 1}
            </div>
            <div>
              <span className="text-xs font-semibold" style={{ color: "#2C1A0E", fontFamily: "'Lato', sans-serif" }}>
                {wp.label}
              </span>
              {wp.note && (
                <span className="text-xs ml-1" style={{ color: "#8B7355" }}>
                  — {wp.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Leaflet map */}
      <div style={{ position: "relative" }}>
        <div ref={mapRef} style={{ height: "320px", width: "100%", background: "#EDE8DF" }} />
        {!routeLoaded && (
          <div
            style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.85)",
              padding: "4px 12px",
              borderRadius: "12px",
              fontSize: "11px",
              fontFamily: "Lato, sans-serif",
              color: "#8B7355",
              pointerEvents: "none",
            }}
          >
            Loading route…
          </div>
        )}
        {/* View Full Route button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "#0A4A5C",
            color: "#fff",
            fontFamily: "'Lato', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            padding: "7px 14px",
            borderRadius: "4px",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            letterSpacing: "0.03em",
            zIndex: 1000,
          }}
        >
          🗺 View Full Route →
        </a>
      </div>

      {/* Drive legs summary */}
      {waypoints.some((w) => w.driveTime) && (
        <div
          className="px-5 py-3 flex flex-wrap gap-4"
          style={{ background: "#F5EDD8", borderTop: "1px solid #E8D5B0" }}
        >
          {waypoints.slice(0, -1).map((wp, i) =>
            wp.driveTime ? (
              <div key={i} className="flex items-center gap-2 text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                <span style={{ color: "#8B7355" }}>
                  {wp.label} → {waypoints[i + 1].label}
                </span>
                <span
                  className="font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(10,74,92,0.1)", color: "#0A4A5C" }}
                >
                  🚗 {wp.driveTime}
                </span>
                {wp.driveDist && <span style={{ color: "#8B7355" }}>{wp.driveDist}</span>}
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
