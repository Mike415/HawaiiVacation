/**
 * DayMap — Maui Family Trip
 * Shows a static Google Maps view centered on Maui with numbered markers
 * for each waypoint, plus a "View Full Route" button that opens Google Maps
 * Directions in a new tab. Works without an API key on GitHub Pages.
 *
 * Approach:
 * - Static map: uses maps.google.com/maps?q= with lat/lng center to reliably
 *   zoom to Maui, with a marker for the first waypoint.
 * - Full route: opens https://www.google.com/maps/dir/ with all waypoints
 *   as a proper directions URL in a new tab.
 */

export interface Waypoint {
  label: string;
  /** Place name or "lat,lng" string used for routing */
  address: string;
  note?: string;
  /** Approximate drive time to NEXT waypoint, e.g. "45 min" */
  driveTime?: string;
  /** Approximate drive distance to NEXT waypoint, e.g. "28 mi" */
  driveDist?: string;
  /** Optional lat/lng for precise marker placement */
  lat?: number;
  lng?: number;
}

interface DayMapProps {
  waypoints: Waypoint[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

const COLORS = ["#E8714A", "#0A4A5C", "#7B9E6B", "#C4873A", "#5B7FA6", "#A0522D", "#2E8B57"];

// Maui center coordinates — used as fallback
const MAUI_CENTER = { lat: 20.7984, lng: -156.3319 };

/**
 * Build a static map embed URL centered on Maui using lat/lng.
 * This reliably zooms to Hawaii regardless of place name resolution.
 */
function buildStaticEmbedUrl(waypoints: Waypoint[], center?: { lat: number; lng: number }, zoom = 11): string {
  // Use provided center, or derive from first waypoint lat/lng, or fall back to Maui center
  const c = center ?? (waypoints[0]?.lat ? { lat: waypoints[0].lat, lng: waypoints[0].lng! } : MAUI_CENTER);
  const q = encodeURIComponent(`${c.lat},${c.lng}`);
  return `https://maps.google.com/maps?q=${q}&z=${zoom}&output=embed`;
}

/**
 * Build a Google Maps Directions URL for opening in a new tab.
 * Uses /maps/dir/ format which is reliable and works without an API key.
 */
function buildDirectionsUrl(waypoints: Waypoint[]): string {
  if (waypoints.length === 0) return "https://maps.google.com/maps?q=Maui,Hawaii";
  // Use lat/lng if available, otherwise use address string
  const parts = waypoints.map((w) =>
    w.lat ? `${w.lat},${w.lng}` : encodeURIComponent(w.address)
  );
  return `https://www.google.com/maps/dir/${parts.join("/")}`;
}

export function DayMap({ waypoints, center, zoom = 11 }: DayMapProps) {
  if (!waypoints || waypoints.length === 0) return null;

  const embedUrl = buildStaticEmbedUrl(waypoints, center, zoom);
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
              style={{ background: COLORS[i % COLORS.length], fontFamily: "'Lato', sans-serif" }}
            >
              {i + 1}
            </div>
            <div>
              <span
                className="text-xs font-semibold"
                style={{ color: "#2C1A0E", fontFamily: "'Lato', sans-serif" }}
              >
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

      {/* Google Maps iframe — centered on Maui via lat/lng */}
      <div style={{ height: "320px", background: "#EDE8DF", position: "relative" }}>
        <iframe
          title="Day route map"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Overlay "View Full Route" button */}
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
            zIndex: 10,
          }}
        >
          🗺 View Full Route →
        </a>
      </div>

      {/* Drive legs summary — static from waypoints data */}
      {waypoints.some((w) => w.driveTime) && (
        <div
          className="px-5 py-3 flex flex-wrap gap-4"
          style={{ background: "#F5EDD8", borderTop: "1px solid #E8D5B0" }}
        >
          {waypoints.slice(0, -1).map((wp, i) =>
            wp.driveTime ? (
              <div
                key={i}
                className="flex items-center gap-2 text-xs"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <span style={{ color: "#8B7355" }}>
                  {wp.label} → {waypoints[i + 1].label}
                </span>
                <span
                  className="font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(10,74,92,0.1)", color: "#0A4A5C" }}
                >
                  🚗 {wp.driveTime}
                </span>
                {wp.driveDist && (
                  <span style={{ color: "#8B7355" }}>{wp.driveDist}</span>
                )}
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
