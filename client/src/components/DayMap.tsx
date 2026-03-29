/**
 * DayMap — Maui Family Trip
 * Renders a Google Maps Directions embed for each day plan.
 * Uses the public Google Maps embed URL (no API key required) so it
 * works on GitHub Pages and any public deployment.
 *
 * Shows:
 * - Numbered waypoint legend
 * - Embedded Google Maps iframe with driving directions
 * - Estimated drive legs (static data from waypoints)
 */

export interface Waypoint {
  label: string;
  address: string;
  note?: string;
  /** Approximate drive time to NEXT waypoint, e.g. "45 min" */
  driveTime?: string;
  /** Approximate drive distance to NEXT waypoint, e.g. "28 mi" */
  driveDist?: string;
}

interface DayMapProps {
  waypoints: Waypoint[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

const COLORS = ["#E8714A", "#0A4A5C", "#7B9E6B", "#C4873A", "#5B7FA6", "#A0522D", "#2E8B57"];

/**
 * Build a keyless Google Maps iframe URL using the public maps.google.com/maps endpoint.
 * This works without an API key and renders driving directions in an iframe.
 */
function buildEmbedUrl(waypoints: Waypoint[]): string {
  if (waypoints.length === 0) return "";

  const encode = (s: string) => encodeURIComponent(s);

  if (waypoints.length === 1) {
    // Single location search
    return `https://maps.google.com/maps?q=${encode(waypoints[0].address)}&output=embed&z=13`;
  }

  // Build a directions URL: saddr (start), daddr (destination with waypoints chained)
  const origin = encode(waypoints[0].address);
  // Chain all stops after the first into daddr using "to:" prefix
  const stops = waypoints.slice(1);
  const daddr = stops.map((w, i) => (i === 0 ? encode(w.address) : `to:${encode(w.address)}`)).join("+");

  return `https://maps.google.com/maps?saddr=${origin}&daddr=${daddr}&dirflg=d&output=embed`;
}

export function DayMap({ waypoints }: DayMapProps) {
  if (!waypoints || waypoints.length === 0) return null;

  const embedUrl = buildEmbedUrl(waypoints);

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
      <div style={{ height: "340px", background: "#EDE8DF" }}>
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
