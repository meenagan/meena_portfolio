const SERIF = "Instrument Serif, Georgia, serif";
const SANS = "Inter, sans-serif";
const PRIMARY = "#1a1410";
const MUTED = "rgba(44,38,32,0.45)";
const ACCENT = "#c8a96e";
const BORDER = "rgba(200,184,154,0.35)";
const CHARCOAL = "#1a1410";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontFamily: SERIF, fontSize: "2rem", color: ACCENT, lineHeight: 1.1 }}>{value}</span>
      <span style={{ fontFamily: SANS, fontSize: "0.65rem", color: MUTED, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginTop: 4 }}>{label}</span>
    </div>
  );
}

export function PullQuotes() {
  return (
    <div style={{ background: "#f5f0eb", minHeight: "100vh", padding: "72px 0 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px" }}>

        {/* ── Hero: photo + headline ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 40, marginBottom: 36 }}>
          <div style={{ flexShrink: 0, width: 144, height: 144, borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg,#d4c4b0 0%,#b8a48a 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: SERIF, fontSize: 48, color: "rgba(255,255,255,0.5)" }}>M</span>
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: SERIF, fontSize: "3.2rem", color: PRIMARY, lineHeight: 1.08, margin: "0 0 14px" }}>
              Translating AI complexity<br />into business reality.
            </h1>
            <p style={{ fontFamily: SANS, fontSize: "1rem", color: MUTED, lineHeight: 1.65, margin: 0, maxWidth: 540 }}>
              Senior Product Marketing Manager, AI at Box. Bringing enterprise AI products from concept to customer adoption through market positioning, monetization strategy, thought leadership, and executive storytelling.
            </p>
          </div>
        </div>

        {/* ── Side-by-side quote cards ── */}
        <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>

          {/* Card 1 — Internal award nomination */}
          <div style={{
            flex: 1,
            background: "#fff",
            border: "1px solid #E0E0E0",
            borderRadius: 8,
            padding: "20px 24px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            borderLeft: "4px solid #C9922A",
            boxSizing: "border-box" as const,
            display: "flex",
            flexDirection: "column" as const,
          }}>
            <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 16, color: CHARCOAL, lineHeight: 1.6, margin: "0 0 12px", flex: 1 }}>
              "This deal wouldn't have crossed the line without her..."
            </p>
            <div style={{ borderTop: "1px solid #E8E8E8", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: CHARCOAL }}>Account Executive</div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: "#888" }}>Box Enterprise · Peer Nomination</div>
              </div>
              <span style={{ fontFamily: SANS, fontSize: 11, color: "#C9922A", fontWeight: 500, letterSpacing: "0.04em" }}>AWARD NOMINATION</span>
            </div>
          </div>

          {/* Card 2 — LinkedIn recommendation */}
          <div style={{
            flex: 1,
            background: "#fff",
            border: "1px solid #E0E0E0",
            borderRadius: 8,
            padding: "20px 24px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            borderLeft: "4px solid #0A66C2",
            boxSizing: "border-box" as const,
            display: "flex",
            flexDirection: "column" as const,
          }}>
            <p style={{ fontFamily: SANS, fontSize: 15, color: CHARCOAL, lineHeight: 1.6, margin: "0 0 12px", flex: 1 }}>
              "She initiated new methods that generated significant increases in leads and pipeline..."
            </p>
            <div style={{ borderTop: "1px solid #E8E8E8", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: CHARCOAL }}>Jonathan Phillips</div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: "#888" }}>Marketing Leader, Salesforce · Mar 2019</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span style={{ fontFamily: SANS, fontSize: 11, color: "#0A66C2", fontWeight: 500 }}>LINKEDIN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Anchor link */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <a href="#in-their-words" style={{ fontFamily: SANS, fontSize: 14, color: ACCENT, fontWeight: 400, textDecoration: "none" }}>
            Read the full nominations and recommendations →
          </a>
        </div>

        {/* ── Featured In press bar ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", marginBottom: 28, flexWrap: "wrap" as const }}>
          <span style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "#fff", background: ACCENT, borderRadius: 999, padding: "3px 10px", textTransform: "uppercase" as const }}>Featured In</span>
          {[
            { pub: "Wired", topic: "Enterprise AI adoption" },
            { pub: "VentureBeat", topic: "AI go-to-market" },
            { pub: "TechCrunch", topic: "AI product launches" },
            { pub: "Forbes", topic: "Women in AI" },
          ].map(({ pub, topic }, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {i > 0 && <span style={{ color: BORDER, fontSize: 14 }}>·</span>}
              <a href="#insights" style={{ fontFamily: SANS, fontSize: "0.8rem", color: PRIMARY, textDecoration: "none" }}>
                {pub} <em style={{ color: MUTED, fontStyle: "italic" }}>({topic})</em> <span style={{ color: ACCENT, fontSize: "0.7rem" }}>↗</span>
              </a>
            </span>
          ))}
        </div>

        {/* ── Metrics strip ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, borderTop: `1px solid ${BORDER}`, paddingTop: 28 }}>
          <Stat value="500K+" label="Explainer Views" />
          <Stat value="~90%" label="AI Certification Participation" />
          <Stat value="~4×" label="Higher Weekly AI Usage" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "1.4rem", color: ACCENT, marginBottom: 4 }}>🏆</span>
            <span style={{ fontFamily: SANS, fontSize: "0.65rem", color: MUTED, textTransform: "uppercase" as const, letterSpacing: "0.1em", lineHeight: 1.4 }}>"Blow Your Customers' Minds" Award</span>
          </div>
        </div>

      </div>
    </div>
  );
}
