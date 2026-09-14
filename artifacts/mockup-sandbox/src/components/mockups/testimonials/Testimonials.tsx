const SERIF = "Instrument Serif, Georgia, serif";
const SANS = "Inter, sans-serif";
const PRIMARY = "#1a1410";
const MUTED = "rgba(44,38,32,0.45)";
const BORDER = "rgba(200,184,154,0.35)";

const boxQuotes = [
  {
    text: "I want to give a big thank you to Meena for her incredible support with a recent enterprise deal that closed at our highest tier. While we had strong use cases across multiple lines of business, the customer's CISO was highly cautious about adopting AI due to security concerns — and his approval was critical. Meena joined two executive briefings with the CISO, navigated his concerns with empathy and expertise, and clearly articulated how we could meet his goals without compromising on security or compliance. He was initially skeptical of sales involvement, but it was clear on both calls that he respected and valued Meena's approach. This deal wouldn't have crossed the line without her.",
    attribution: "Account Executive, Box Enterprise",
  },
  {
    text: "Meena's presentation on AI had a significant impact on the customer, sparking discussions that led to a six-figure expansion opportunity. Customers consistently respond positively to her presentation style and messaging. She has done an outstanding job supporting executive briefings and educating them on AI.",
    attribution: "Account Executive, Box Enterprise",
  },
  {
    text: "Meena participated in multiple executive briefings speaking about Box AI directly to our customers. In two recent interactions, she helped influence six figures in pipeline and closed revenue — sharing customer success stories to build trust, demoing AI Extract Agent capabilities, helping a skeptical CISO understand permissions-aware AI architecture, introducing our MCP server aligned to the customer's RAG and vector DB roadmap, and proactively offering written responses to AI security questions that further built infosec team confidence.",
    attribution: "Senior Manager, Product Marketing, Box",
  },
];

const linkedInQuotes = [
  { text: "Meena and I worked together on multiple marketing events at Salesforce and the results were nothing short of exceptional. Her creative prowess and diligence come together to deliver outstanding demonstrations and stories — while allowing fun and creativity in the process, making it easier to connect with the audience through storytelling. She breaks down complex topics into easily digestible and relatable concepts. She is the perfect balance of fun, creative, professional, and dependable.", name: "Thomas Jenket", title: "Principal Solution Consultant, Salesforce Industries" },
  { text: "I had the pleasure of working closely with Meena as we partnered on developing marketing messaging, programs, and go-to-market events for the Communications sector. I was consistently impressed with her ability to articulate complex concepts, connect with stakeholders, and demonstrate a tremendous 'can do' attitude when faced with competing priorities and demanding stakeholders.", name: "Brad Pruner", title: "Senior Director, Product Strategy, Salesforce Industries" },
  { text: "Meena has a passionate enthusiasm which engages and inspires everyone she meets. She leverages her technical acumen to understand the technology and then translates that understanding into the right message for her audience. She is an excellent presenter — always ready to grab the mic, get on stage, and tell our story. She initiated new methods to engage customers, partners, and sales teams — generating significant increases in leads and pipeline with excellent ROI.", name: "Jonathan Phillips", title: "Industry & Product Marketing Leader, Salesforce — direct manager" },
  { text: "Meena is not only fun to work with but a great asset to any team. She shines when she is on stage. Her ability to translate complex technical features into user-friendly marketing materials is impressive. I saw how effectively she managed to work with different teams across different timezones.", name: "Jasmina Misljencevic", title: "Director, Industry Advisor — Telecom, Media & Technology, Salesforce" },
];

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function Testimonials() {
  return (
    <div style={{ background: "#f5f0eb", minHeight: "100vh", padding: "60px 32px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        <h2 style={{ fontFamily: SERIF, fontSize: "2.5rem", color: PRIMARY, marginBottom: 40, textAlign: "center" as const }}>
          Executive Influence
        </h2>

        {/* ── Peer-Nominated — award nomination style ── */}
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 36, marginBottom: 16 }}>
          <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", color: PRIMARY, marginBottom: 20 }}>
            Peer-Nominated — <em>"Blow Your Customers' Minds"</em> Award, Box
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 12 }}>
            {boxQuotes.map((q, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #E0E0E0",
                borderLeft: "4px solid #C9922A",
                borderRadius: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column" as const,
              }}>
                <div style={{ padding: "20px 24px 12px" }}>
                  <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 16, color: PRIMARY, lineHeight: 1.6, margin: 0 }}>{q.text}</p>
                </div>
                <div style={{ margin: "0 24px", borderTop: "1px solid #E8E8E8", padding: "12px 0 16px" }}>
                  <p style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: MUTED, margin: 0 }}>{q.attribution}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(44,38,32,0.40)", fontStyle: "italic", lineHeight: 1.6 }}>
            Names and company details have been anonymized to protect customer confidentiality — all quotes otherwise reflect the original wording and intent of the feedback.
          </p>
        </div>

        {/* ── LinkedIn Recs — Card 2 style ── */}
        <div id="in-their-words" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 36, marginTop: 40 }}>
          <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", color: PRIMARY, marginBottom: 20 }}>
            LinkedIn Recommendations
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {linkedInQuotes.map((q, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #E0E0E0",
                borderLeft: "4px solid #0A66C2",
                borderRadius: 8,
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column" as const,
              }}>
                <div style={{ padding: "20px 20px 12px" }}>
                  <p style={{ fontFamily: SANS, fontSize: 15, color: PRIMARY, lineHeight: 1.6, margin: 0 }}>{q.text}</p>
                </div>
                <div style={{ margin: "0 20px", borderTop: "1px solid #E8E8E8", padding: "12px 0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: PRIMARY }}>{q.name}</div>
                    <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(44,38,32,0.50)", marginTop: 2 }}>{q.title}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0, marginLeft: 12 }}>
                    <LinkedInIcon />
                    <span style={{ fontFamily: SANS, fontSize: 11, color: "#0A66C2", fontWeight: 500 }}>LINKEDIN</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
