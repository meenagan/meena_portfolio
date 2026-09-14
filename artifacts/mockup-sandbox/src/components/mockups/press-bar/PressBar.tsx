export function PressBar() {
  const pubs = [
    { name: "MarTech Series", topic: "Marketing AI" },
    { name: "TechRadar Pro", topic: "Enterprise Agents" },
    { name: "IT Daily", topic: "Future of Work" },
    { name: "Box Blog", topic: "AI & Metadata" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0eb] flex items-start justify-center pt-8">
      <a
        href="#insights"
        className="w-full max-w-5xl mx-auto group"
      >
        <div className="flex items-center gap-5 px-6 py-4 rounded-2xl border border-[#c8b89a]/35 bg-white/60 hover:bg-white/80 hover:border-[#c8a96e]/50 transition-all shadow-sm hover:shadow-md">
          {/* Label pill */}
          <span
            className="shrink-0 text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border"
            style={{ color: "#c8a96e", borderColor: "#c8a96e55", backgroundColor: "#c8a96e12" }}
          >
            Featured In
          </span>

          <span className="w-px h-5 bg-[#c8b89a]/40 shrink-0" />

          {/* Publications */}
          <span className="flex items-center flex-wrap gap-y-1 flex-1">
            {pubs.map((p, i) => (
              <span key={p.name} className="flex items-center">
                {i > 0 && (
                  <span className="mx-3 text-[#c8b89a]/60 text-sm select-none">·</span>
                )}
                <span className="text-[12px] text-[#2c2620]/90 font-semibold tracking-wide">
                  {p.name}
                </span>
                <span className="text-[11px] text-[#2c2620]/38 tracking-wide ml-1 font-light italic">
                  ({p.topic})
                </span>
              </span>
            ))}
          </span>

          {/* Arrow */}
          <span className="shrink-0 text-[#c8a96e]/50 group-hover:text-[#c8a96e] group-hover:translate-x-0.5 transition-all text-xs font-medium tracking-wider">
            ↗
          </span>
        </div>
      </a>
    </div>
  );
}
