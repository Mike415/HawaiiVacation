/**
 * DayMap — Maui Family Trip
 * Uses Google Maps embed (maps.google.com/maps?saddr=...&daddr=...) to show
 * a driving route between waypoints. All place names must include ", Maui, HI"
 * to ensure Google Maps resolves them to the correct Hawaii locations.
 * A "View Full Route" button opens Google Maps Directions in a new tab.
 */

export interface Waypoint {
  label: string;
  /** Unambiguous place name including ", Maui, HI" for reliable resolution */
  address: string;
  note?: string;
  driveTime?: string;
  driveDist?: string;
}

interface DayMapProps {
  waypoints: Waypoint[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

const COLORS = ["#E8714A", "#0A4A5C", "#7B9E6B", "#C4873A", "#5B7FA6", "#A0522D", "#2E8B57"];

/**
 * Build a Google Maps embed URL using saddr/daddr for routing.
 * We pass the first waypoint as saddr and chain the rest as daddr with "to:" prefix.
 * All addresses include ", Maui, HI" to prevent ambiguous resolution.
 */
function buildEmbedUrl(waypoints: Waypoint[]): string {
  if (waypoints.length === 0) return "https://maps.google.com/maps?q=Maui+Hawaii&output=embed";
  if (waypoints.length === 1) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(waypoints[0].address)}&output=embed`;
  }

  const origin = encodeURIComponent(waypoints[0].address);
  const destination = encodeURIComponent(waypoints[waypoints.length - 1].address);

  // Build waypoints string for intermediate stops
  const stops = waypoints.slice(1, -1).map((w) => encodeURIComponent(w.address)).join("+to:");
  const waypointsParam = stops ? `+to:${stops}+to:` : "+to:";

  return `https://maps.google.com/maps?saddr=${origin}&daddr=${waypointsParam}${destination}&dirflg=d&output=embed`;
}

/**
 * Build a Google Maps Directions URL for opening in a new tab.
 */
function buildDirectionsUrl(waypoints: Waypoint[]): string {
  if (waypoints.length === 0) return "https://maps.google.com/maps?q=Maui,Hawaii";
  const parts = waypoints.map((w) => encodeURIComponent(w.address));
  return `https://www.google.com/maps/dir/${parts.join("/")}`;
}

export function DayMap({ waypoints }: DayMapProps) {
  if (!waypoints || waypoints.length === 0) return null;

  const embedUrl = buildEmbedUrl(waypoints);
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

      {/* Google Maps iframe */}
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
            zIndex: 10,
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
