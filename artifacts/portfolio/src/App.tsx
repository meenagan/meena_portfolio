import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Linkedin, ExternalLink, Mic, Trophy, ChevronDown, ChevronLeft, ChevronRight, Sparkles, Check, Target, Zap, TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import meenaPhoto from "@assets/Meena_Ganesh_Box_AI_Senior_Product_Marketing_Manager_MarTech_I_1780675144356.jpg";
import aiTrendsWebinarPhoto from "@assets/20260605_104706-COLLAGE_1780681724400.jpg";
import ragathonThumbnail from "@assets/ragathon_thumbnail.jpg";
import leadersInAIThumbnail from "@assets/leaders_in_ai_thumbnail.jpg";
import aragonThumbnail from "@assets/aragon_thumbnail.jpg";
import ytExplainerThumb from "@assets/yt_explainer_series_thumb.jpg";
import boxworksDemo from "@assets/BoxWorks_AI_Studio_Demo_1780773928274.jpg";
import aiTrendsWebinarCarousel from "@assets/Trends_webinar_BTS_1780775636040.jpeg";
import fundwellBTS from "@assets/Fundwell_BTS_1780773811337.jpg";
import { CaseStudyPage } from "@/pages/CaseStudyPage";
import { caseStudies, caseStudySections } from "./data/case-studies";

const queryClient = new QueryClient();

const navItems = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "Speaking", href: "#speaking" },
  { label: "Thought Leadership", href: "#insights" },
  { label: "Influence", href: "#influence" },
  { label: "About", href: "#about" },
];

function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const caseStudiesGroups = [
    {
      heading: "Market Creation",
      headingHref: "#market-creation",
      items: [
        { label: "Box AI Explainer Series", href: "#cs-explainer-series" },
        { label: "AI Narrative & Thought Leadership", href: "#cs-ai-narrative" },
      ],
    },
    {
      heading: "Customer Education",
      headingHref: "#customer-education",
      items: [
        { label: "AI Certification Program", href: "#cs-ai-cert" },
        { label: "AI in Action Series", href: "#cs-ai-in-action" },
        { label: "Build Your Own Agent Workshops", href: "#cs-agent-workshops" },
        { label: "AI Agents Playbook", href: "#cs-ai-agents-playbook" },
        { label: "Secure RAG Framework", href: "#cs-secure-rag" },
      ],
    },
    {
      heading: "In-Product Growth",
      headingHref: "#in-product-growth",
      items: [
        { label: "AI Discover Page", href: "#cs-ai-discover-page" },
        { label: "AI Demo Agent System", href: "#cs-agent-scaling" },
      ],
    },
    {
      heading: "Revenue Acceleration",
      headingHref: "#revenue-acceleration",
      items: [
        { label: "Box AI Product Launches", href: "#cs-ai-product-launches" },
        { label: "Box AI Units: Launch & Monetization Strategy", href: "#cs-ai-units" },
      ],
    },
  ];

  const dropdowns: Record<string, Array<{ label: string; href: string; external?: boolean }>> = {
    "Speaking": [
      { label: "Leaders in AI", href: "#speaking-0" },
      { label: "Agentic RAG-a-thon", href: "#speaking-1" },
      { label: "2025 AI Trends Webinar", href: "#speaking-2" },
      { label: "Aragon Research Panel", href: "#speaking-3" },
    ],
    "Thought Leadership": [
      { label: "MarTech Series", href: "https://martechseries.com/mts-insights/interviews/martech-interview-with-meena-ganesh-senior-product-marketing-manager-box-ai/", external: true },
      { label: "TechRadar Pro", href: "https://www.techradar.com/pro/infants-to-teens-to-college-graduates-and-now-ai-finally-enters-the-workforce-as-agents", external: true },
      { label: "IT Daily", href: "https://www.it-daily.net/it-management/ki/wie-ki-agenten-arbeitsroutinen-revolutionieren-werden", external: true },
      { label: "Versicherungsbote", href: "https://www.versicherungsbote.de/id/4937751/Die-Rolle-von-KI-Agenten-bei-der-Prozessoptimierung-des-Versicherungsbetriebs/", external: true },
      { label: "InformatiqueNews (France)", href: "https://www.informatiquenews.fr/agents-ia-la-prochaine-revolution-du-travail-a-commence-meena-ganesh-box-106210", external: true },
      { label: "Box Blog", href: "https://blog.box.com/why-does-metadata-matter-ai-first-era?utm_source=linkedin&utm_medium=organicsocial&utm_theme=alwaysondigital&utm_campaign=eadvanced-tl-0304", external: true },
    ],
  };

  return (
    <>
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
      data-testid="navigation"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-medium tracking-tight text-primary">
          Meena Ganesh
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const hasDropdown = item.label in dropdowns || item.label === "Case Studies";
            const isOpen = activeDropdown === item.label;
            return hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </a>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full mt-3 bg-white border border-border/50 rounded-xl shadow-xl overflow-hidden z-50 ${item.label === "Case Studies" ? "left-1/2 -translate-x-1/2 w-[680px]" : "left-0 w-64"}`}
                    >
                      {item.label === "Case Studies" ? (
                        <div className="p-6 grid grid-cols-4 gap-6">
                          {caseStudiesGroups.map((group) => (
                            <div key={group.heading}>
                              <a
                                href={group.headingHref}
                                className="block text-[10px] font-bold tracking-widest uppercase text-secondary hover:text-secondary/70 transition-colors mb-3 pb-2 border-b border-border/30"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {group.heading}
                              </a>
                              <div className="space-y-1">
                                {group.items.map((sub) => (
                                  <a
                                    key={sub.label}
                                    href={sub.href}
                                    className="block text-xs text-primary/70 hover:text-primary hover:translate-x-0.5 transition-all leading-snug py-1"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {sub.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        dropdowns[item.label].map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            target={sub.external ? "_blank" : undefined}
                            rel={sub.external ? "noopener noreferrer" : undefined}
                            className="flex items-center justify-between px-4 py-3 text-sm text-primary/80 hover:text-primary hover:bg-secondary/5 transition-colors border-b border-border/20 last:border-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span>{sub.label}</span>
                            {sub.external
                              ? <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                              : <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />}
                          </a>
                        ))
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            );
          })}
          <Button asChild variant="default" className="rounded-full px-6 font-medium">
            <a href="http://linkedin.com/in/ai-pmm-meenagan" target="_blank" rel="noopener noreferrer" data-testid="link-linkedin">Connect on LinkedIn</a>
          </Button>
        </div>
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center text-primary rounded-full hover:bg-secondary/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </motion.nav>
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-16 left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border/40"
        >
          <div className="px-6 py-2">
            {[
              { label: "Case Studies", href: "#case-studies" },
              { label: "Speaking", href: "#speaking" },
              { label: "Thought Leadership", href: "#insights" },
              { label: "Influence", href: "#influence" },
              { label: "About", href: "#about" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 text-base font-medium text-primary border-b border-border/20 last:border-0 min-h-[56px]"
              >
                {item.label}
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
            <div className="py-4">
              <a
                href="http://linkedin.com/in/ai-pmm-meenagan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-white text-sm font-semibold min-h-[48px]"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
function Hero() {
  return (
    <section id="hero" className="pt-20 md:pt-24 pb-4 md:pb-8 px-4 md:px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Top row: Photo + Title/Subheader side by side */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8 md:mb-14">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <div className="relative w-36 h-36 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-3xl bg-secondary/10 translate-x-3 translate-y-3" />
              <img
                src={meenaPhoto}
                alt="Meena Ganesh"
                data-testid="img-meena-hero"
                className="relative w-full h-full object-cover object-top rounded-3xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Title + subheader */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-primary leading-[1.1] mb-5 text-center md:text-left">
              Translating AI complexity into business reality.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
              Senior Product Marketing Manager, AI at Box. Bringing enterprise AI products from concept to customer adoption through market positioning, monetization strategy, thought leadership, and executive storytelling.
            </p>
          </motion.div>
        </div>

        {/* Pull quote cards */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Card 1 — Award nomination */}
          <div className="flex-1 bg-white flex flex-col p-5 rounded-lg border border-[#E0E0E0]" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: "4px solid #C9922A" }}>
            <p className="font-serif italic text-[16px] text-primary leading-[1.6] flex-1 mb-3">
              "This deal wouldn't have crossed the line without her..."
            </p>
            <div className="border-t border-[#E8E8E8] pt-2.5 flex items-center justify-between">
              <div>
                <div className="text-[13px] font-semibold text-primary">Account Executive</div>
                <div className="text-[12px] text-muted-foreground/60">Box Enterprise · Peer Nomination</div>
              </div>
              <span className="text-[11px] font-medium tracking-wide" style={{ color: "#C9922A" }}>AWARD NOMINATION</span>
            </div>
          </div>
          {/* Card 2 — LinkedIn recommendation */}
          <div className="flex-1 bg-white flex flex-col p-5 rounded-lg border border-[#E0E0E0]" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: "4px solid #0A66C2" }}>
            <p className="text-[15px] text-primary leading-[1.6] flex-1 mb-3">
              "She initiated new methods that generated significant increases in leads and pipeline..."
            </p>
            <div className="border-t border-[#E8E8E8] pt-2.5 flex items-center justify-between">
              <div>
                <div className="text-[13px] font-semibold text-primary">Jonathan Phillips</div>
                <div className="text-[12px] text-muted-foreground/60">Marketing Leader, Salesforce · Mar 2019</div>
              </div>
              <div className="flex items-center gap-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span className="text-[11px] font-medium" style={{ color: "#0A66C2" }}>LINKEDIN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Anchor link */}
        <div className="text-center mb-5">
          <a href="#in-their-words" className="text-[14px] text-secondary hover:underline" style={{ fontWeight: 400 }}>
            Read the full nominations and recommendations →
          </a>
        </div>

        {/* Press bar */}
        <a
          href="#insights"
          className="group flex items-center gap-5 px-5 py-3.5 mb-6 rounded-2xl border border-border/40 bg-white/60 hover:bg-white/85 hover:border-secondary/40 transition-all shadow-sm hover:shadow-md"
        >
          <span className="shrink-0 text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border text-secondary" style={{ borderColor: "hsl(var(--secondary)/0.35)", backgroundColor: "hsl(var(--secondary)/0.08)" }}>
            Featured In
          </span>
          <span className="w-px h-5 bg-border/60 shrink-0" />
          <span className="flex items-center flex-wrap gap-y-1 flex-1 min-w-0">
            {[
              { name: "MarTech Series", topic: "Marketing AI" },
              { name: "TechRadar Pro", topic: "Enterprise Agents" },
              { name: "IT Daily", topic: "Future of Work" },
              { name: "Box Blog", topic: "AI & Metadata" },
            ].map((p, i) => (
              <span key={p.name} className="flex items-center">
                {i > 0 && <span className="mx-2 md:mx-3 text-border text-sm select-none">·</span>}
                <span className="text-[11px] md:text-[12px] text-primary/90 font-semibold tracking-wide">{p.name}</span>
                <span className="text-[10px] md:text-[11px] text-muted-foreground/60 ml-1 font-light italic">({p.topic})</span>
              </span>
            ))}
          </span>
          <span className="shrink-0 text-secondary/50 group-hover:text-secondary group-hover:translate-x-0.5 transition-all text-xs">↗</span>
        </a>

        {/* Stats row — full width, 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border/50 pt-10">
          {[
            { label: "Explainer Views", value: "500K+" },
            { label: "AI Certification Participation", value: "~90%" },
            { label: "Higher Weekly AI Usage", value: "~4×" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-3xl md:text-4xl font-serif text-secondary mb-1">{stat.value}</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider leading-snug">{stat.label}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col"
          >
            <Trophy className="w-6 h-6 text-secondary mb-1" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider leading-snug">"Blow Your Customers' Minds" Award</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-6 md:py-10 px-4 md:px-6 border-t border-border/50 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 sticky top-32"
          >
            <h2 className="text-4xl font-serif text-primary mb-6">About Meena</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With 13 years across technical, product, and GTM functions, I lead AI product marketing at Box. My focus is translating deep system capabilities into high-impact customer outcomes.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="space-y-12">
              {[
                { title: "AI Product Launches", desc: "Orchestrating multi-tiered releases and unified positioning across complex product portfolios." },
                { title: "Pricing & Monetization", desc: "Designing consumption logic and pricing structures that align value with cost." },
                { title: "Executive Storytelling", desc: "Crafting narratives that resonate in the boardroom and drive strategic alignment." },
                { title: "Customer Education", desc: "Building systemic learning foundations to decode structural realities for sales and buyers." },
                { title: "Organizational Adoption", desc: "Converting feature footprints into active engagements via programmatic workshops." }
              ].map((area, i) => (
                <div key={area.title} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <span className="font-serif font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function CaseStudies() {
  const bySlug = Object.fromEntries(caseStudies.map((cs) => [cs.slug, cs]));

  return (
    <section id="case-studies" className="py-6 md:py-10 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <h2 className="text-4xl font-serif text-primary mb-2">Case Studies</h2>
          <p className="text-lg text-muted-foreground">Strategic execution across the funnel.</p>
        </div>

        <div className="space-y-8">
          {caseStudySections.map((section) => (
            <div key={section.id} id={section.id} className="border-t border-border/50 pt-6">
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest text-secondary uppercase">
                  {section.eyebrow}
                </span>
                <h3 className="text-2xl font-serif text-primary mt-1">{section.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xl">{section.description}</p>
              </div>
              <div className={`grid gap-6 ${section.gridClass}`}>
                {section.slugs.map((slug, i) => {
                  const study = bySlug[slug];
                  if (!study) return null;

                  const [challengeText, actionText] = (() => {
                    const p = study.summary.indexOf(". ");
                    if (p === -1) return [study.summary, ""];
                    return [study.summary.slice(0, p + 1), study.summary.slice(p + 2)];
                  })();

                  return (
                    <motion.div
                      key={study.slug}
                      id={study.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      data-testid={`case-study-${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-white rounded-2xl border border-border/50 shadow-sm flex flex-col p-7 hover:shadow-md transition-shadow"
                    >
                      <div className="mb-4">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-secondary">{study.category}</span>
                        <h4 className="text-xl font-serif text-primary mt-1 leading-snug">{study.title}</h4>
                      </div>
                      <div className="h-px bg-border/30 mb-4" />
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                          <Target className="w-4 h-4 text-rose-500" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-rose-500 mb-1">Challenge</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{challengeText}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                          <Zap className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-1">Action</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{actionText}</p>
                        </div>
                      </div>
                      <div className="h-px bg-border/30 mb-4" />
                      <div className="mb-4 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          <p className="text-[10px] font-bold tracking-widest uppercase text-emerald-600">Results</p>
                        </div>
                        <ul className="space-y-1.5">
                          {study.outcomes.map((o) => (
                            <li key={o} className="text-sm text-primary/80 flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="h-px bg-border/30 mb-4" />
                      <div className="flex items-start gap-2 mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-1">Key Takeaway</p>
                          <p className="text-xs text-primary/70 font-serif leading-snug">{study.keyLearning}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 pt-2 border-t border-border/30">
                        {study.externalLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                          >
                            {link.text}
                            {link.isExternal ? <ExternalLink className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                          </a>
                        ))}
                        {study.productLinks && (
                          <div className="flex flex-wrap gap-1.5 mt-0.5">
                            {study.productLinks.map((pl) => (
                              <a
                                key={pl.text}
                                href={pl.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary/5 border border-secondary/20 text-secondary text-xs font-semibold hover:bg-secondary/10 transition-colors"
                              >
                                {pl.text} <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            ))}
                          </div>
                        )}
                        <a
                          href={"/case-studies/" + study.slug}
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ArrowRight className="w-3 h-3" />
                          Dive deeper into this case study
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Influence() {
  const cards = [
    { title: "C-Suite Alignment", desc: "Presented AI positioning strategy such as \"secure RAG\" directly to CEO Aaron Levie and CTO Ben Kus." },
    { title: "Keynote Stage", desc: "Wrote and delivered the Box AI Studio keynote segment live at BoxWorks." },
    { title: "Product Influence", desc: "Shaped the strategy and design of Box's AI Discover Page in the Admin Console, resulting in ~4× higher weekly AI usage." },
    { title: "\"Blow Your Customers' Minds\" Award", desc: "Nominated by field teams and PMM leadership and recognized with one of the company's highest honors for delivering meaningful customer impact through strategic innovation and execution in enterprise AI deals." },
    { title: "Roadmap Advisory", desc: "Served as the GTM translation layer between engineering roadmap releases and market-facing messaging." },
  ];

  const boxQuotes = [
    { text: "I want to give a big thank you to Meena for her incredible support with a recent enterprise deal that closed at our highest tier. While we had strong use cases across multiple lines of business, the customer's CISO was highly cautious about adopting AI due to security concerns — and his approval was critical. Meena joined two executive briefings with the CISO, navigated his concerns with empathy and expertise, and clearly articulated how we could meet his goals without compromising on security or compliance. He was initially skeptical of sales involvement, but it was clear on both calls that he respected and valued Meena's approach. This deal wouldn't have crossed the line without her.", attribution: "Account Executive, Box Enterprise" },
    { text: "Meena's presentation on AI had a significant impact on the customer, sparking discussions that led to a six-figure expansion opportunity. Customers consistently respond positively to her presentation style and messaging. She has done an outstanding job supporting executive briefings and educating them on AI.", attribution: "Account Executive, Box Enterprise" },
    { text: "Meena participated in multiple executive briefings speaking about Box AI directly to our customers. In two recent interactions, she helped influence six figures in pipeline and closed revenue — sharing customer success stories to build trust, demoing AI Extract Agent capabilities, helping a skeptical CISO understand permissions-aware AI architecture, introducing our MCP server aligned to the customer's RAG and vector DB roadmap, and proactively offering written responses to AI security questions that further built infosec team confidence.", attribution: "Senior Manager, Product Marketing, Box" },
  ];

  const linkedInQuotes = [
    { text: "Meena and I worked together on multiple marketing events at Salesforce and the results were nothing short of exceptional. Her creative prowess and diligence come together to deliver outstanding demonstrations and stories — while allowing fun and creativity in the process, making it easier to connect with the audience through storytelling. She breaks down complex topics into easily digestible and relatable concepts. She is the perfect balance of fun, creative, professional, and dependable.", name: "Thomas Jenket", title: "Principal Solution Consultant, Salesforce Industries" },
    { text: "I had the pleasure of working closely with Meena as we partnered on developing marketing messaging, programs, and go-to-market events for the Communications sector. I was consistently impressed with her ability to articulate complex concepts, connect with stakeholders, and demonstrate a tremendous 'can do' attitude when faced with competing priorities and demanding stakeholders.", name: "Brad Pruner", title: "Senior Director, Product Strategy, Salesforce Industries" },
    { text: "Meena has a passionate enthusiasm which engages and inspires everyone she meets. She leverages her technical acumen to understand the technology and then translates that understanding into the right message for her audience. She is an excellent presenter — always ready to grab the mic, get on stage, and tell our story. She initiated new methods to engage customers, partners, and sales teams — generating significant increases in leads and pipeline with excellent ROI.", name: "Jonathan Phillips", title: "Industry & Product Marketing Leader, Salesforce — direct manager" },
    { text: "Meena is not only fun to work with but a great asset to any team. She shines when she is on stage. Her ability to translate complex technical features into user-friendly marketing materials is impressive. I saw how effectively she managed to work with different teams across different timezones.", name: "Jasmina Misljencevic", title: "Director, Industry Advisor — Telecom, Media & Technology, Salesforce" },
  ];

  return (
    <section id="influence" className="py-6 md:py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* ── Bullet cards ── */}
        <div>
          <h2 className="text-4xl font-serif text-primary mb-10 text-center">Executive Influence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-border/50 hover:border-secondary/30 transition-colors"
              >
                <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-secondary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Peer-Nominated subsection ── */}
        <div className="border-t border-border/40 pt-10 space-y-6">
          <h3 className="text-2xl font-serif text-primary">
            Peer-Nominated — <em>"Blow Your Customers' Minds"</em> Award, Box
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {boxQuotes.map((q, i) => (
              <div key={i} className="bg-white flex flex-col rounded-lg border border-[#E0E0E0]" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: "4px solid #C9922A" }}>
                <div className="flex-1 p-5 pb-3">
                  <p className="font-serif italic text-[16px] text-primary leading-[1.6]">{q.text}</p>
                </div>
                <div className="mx-5 border-t border-[#E8E8E8] pt-3 pb-4">
                  <p className="text-[13px] font-medium text-muted-foreground/70">{q.attribution}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground/50 italic leading-relaxed">
            Names and company details have been anonymized to protect customer confidentiality — all quotes otherwise reflect the original wording and intent of the feedback.
          </p>
        </div>

        {/* ── LinkedIn Recs subsection ── */}
        <div id="in-their-words" className="border-t border-border/40 pt-10 space-y-6">
          <h3 className="text-2xl font-serif text-primary">LinkedIn Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {linkedInQuotes.map((q, i) => (
              <div key={i} className="bg-white flex flex-col rounded-lg border border-[#E0E0E0]" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: "4px solid #0A66C2" }}>
                <div className="flex-1 p-5 pb-3">
                  <p className="text-[15px] text-primary leading-[1.6]">{q.text}</p>
                </div>
                <div className="mx-5 border-t border-[#E8E8E8] pt-3 pb-4 flex items-center justify-between">
                  <div>
                    <a href="#" className="text-[13px] font-semibold text-primary hover:underline block">{q.name}</a>
                    <p className="text-[12px] text-muted-foreground/60 mt-0.5">{q.title}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 ml-3">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span className="text-[11px] font-medium" style={{ color: "#0A66C2" }}>LINKEDIN</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Insights() {
  const published = [
    {
      title: "AI Agents, Content Intelligence & the Future of Enterprise Marketing",
      publisher: "MarTech Series",
      location: "",
      summary: "Invited as an industry thought leader, I share perspectives on how AI agents are transforming enterprise content workflows, the importance of secure AI adoption, and why intelligent content platforms are becoming foundational to business productivity.",
      format: "Executive interview and thought leadership feature",
      href: "https://martechseries.com/mts-insights/interviews/martech-interview-with-meena-ganesh-senior-product-marketing-manager-box-ai/?utm_source=hootsuite&utm_medium=facebook&utm_term=martech+series&utm_content=de3aa135-48ed-428f-90d5-c7b7873f262c&utm_campaign=Organic",
      brandGradient: "from-violet-800 to-indigo-900",
    },
    {
      title: "AI Agents Enter the Workforce",
      publisher: "TechRadar Pro",
      location: "",
      summary: "In this contributed article, I explore the evolution of AI from assistant to autonomous agent, examining how agentic AI is reshaping knowledge work and enabling organizations to unlock new levels of productivity and innovation.",
      format: "Contributed thought leadership article",
      href: "https://www.techradar.com/pro/infants-to-teens-to-college-graduates-and-now-ai-finally-enters-the-workforce-as-agents",
      brandGradient: "from-red-900 to-gray-950",
    },
    {
      title: "How AI Agents Will Revolutionize Workplace Routines",
      publisher: "IT Daily",
      location: "Germany",
      summary: "A perspective on the shift from task automation to agent-driven workflows, and how enterprises can leverage AI agents to reduce operational friction while empowering employees to focus on higher-value work.",
      format: "Contributed thought leadership article",
      href: "https://www.it-daily.net/it-management/ki/wie-ki-agenten-arbeitsroutinen-revolutionieren-werden",
      brandGradient: "from-sky-900 to-blue-950",
    },
    {
      title: "The Role of AI Agents in Insurance Operations",
      publisher: "Versicherungsbote",
      location: "Germany",
      summary: "An exploration of how AI agents can transform insurance processes through automation, intelligent decision support, and governance-driven AI adoption in highly regulated industries.",
      format: "Contributed thought leadership article",
      href: "https://www.versicherungsbote.de/id/4937751/Die-Rolle-von-KI-Agenten-bei-der-Prozessoptimierung-des-Versicherungsbetriebs/",
      brandGradient: "from-emerald-900 to-teal-950",
    },
    {
      title: "The Next Revolution of Work Has Already Begun",
      publisher: "InformatiqueNews",
      location: "France",
      summary: "This article examines how AI agents are moving beyond experimentation into real business applications, fundamentally changing how organizations scale expertise, automate workflows, and augment human decision-making.",
      format: "Contributed thought leadership article",
      href: "https://www.informatiquenews.fr/agents-ia-la-prochaine-revolution-du-travail-a-commence-meena-ganesh-box-106210",
      brandGradient: "from-blue-800 to-slate-950",
    },
    {
      title: "Why Does Metadata Matter in an AI-First Era?",
      publisher: "Box Blog",
      location: "",
      summary: "Exploring how metadata has evolved from a compliance and organizational tool into a foundational layer for AI intelligence—enabling AI agents to understand content context, improve retrieval accuracy, and deliver more precise, trustworthy responses in enterprise workflows.",
      format: "Executive thought leadership article",
      href: "https://blog.box.com/why-does-metadata-matter-ai-first-era?utm_source=linkedin&utm_medium=organicsocial&utm_theme=alwaysondigital&utm_campaign=eadvanced-tl-0304",
      brandGradient: "from-blue-700 to-blue-900",
    },
  ];

  return (
    <section id="insights" className="py-6 md:py-10 px-4 md:px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif text-white mb-4">Thought Leadership & Industry Publications</h2>
        <p className="text-white/50 mb-16 text-lg font-light max-w-3xl">
          Driving industry conversations on AI agents, enterprise AI adoption, content intelligence, and the future of work through invited interviews and contributed thought leadership featured in leading technology and business publications.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {published.map((item, i) => (
            <motion.a
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              key={item.href + item.title}
              data-testid={`link-article-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all group overflow-hidden"
            >
              <div className={`h-16 bg-gradient-to-br ${item.brandGradient} flex items-center justify-between px-6 shrink-0`}>
                <div className="flex items-center gap-2">
                  <span className="text-white/90 font-bold text-xs tracking-widest uppercase">{item.publisher}</span>
                  {item.location && (
                    <span className="text-white/40 text-xs">&middot; {item.location}</span>
                  )}
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors shrink-0" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-base font-medium text-white/90 group-hover:text-white transition-colors leading-snug mb-4">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1 mb-4">{item.summary}</p>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-white/30 border-t border-white/10 pt-4">{item.format}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speaking() {
  const engagements = [
    {
      title: "Leaders in AI",
      role: "Moderator & Host",
      event: "Women in Technology at Box",
      date: "October 2025",
      desc: "Moderated an executive panel featuring senior AI leaders from OpenAI, Meta, and Box, focused on scaling AI teams, responsible innovation, career growth, and the future of AI leadership. As Global Co-Chair of Women in Technology at Box, I hosted a candid discussion on the intersection of technology, leadership, mentorship, and impact.",
      highlights: ["Moderated executive-level discussion", "Responsible AI and AI governance", "Leadership and career growth in AI", "Women leading AI innovation"],
      photo: leadersInAIThumbnail as string | undefined,
    },
    {
      title: "Agentic RAG-a-thon",
      role: "Panelist & Judge",
      event: "",
      date: "May 2025",
      desc: "Represented Box on the main-stage panel alongside leaders from SAP, Arize AI, and Toolhouse to discuss what it takes to move AI agents from prototypes to enterprise-ready solutions. Shared Box's perspective on governance, explainability, security, and deploying AI agents within content-rich enterprise workflows.",
      highlights: ["Enterprise AI adoption", "Agentic AI product strategy", "Governance and explainability", "Judged 49+ AI projects across 222 developers"],
      photo: ragathonThumbnail as string | undefined,
    },
    {
      title: "2025 AI Trends Webinar",
      role: "Host & Moderator",
      event: "Featuring Google Cloud and Box Executives",
      date: "2025",
      desc: "Hosted an executive webinar featuring leaders from Google Cloud and Box exploring emerging AI trends, enterprise implementation strategies, AI governance, and industry-specific applications across life sciences, financial services, and the public sector.",
      highlights: ["Enterprise AI strategy", "AI adoption and transformation", "Industry-specific use cases", "Security and governance best practices"],
      photo: aiTrendsWebinarPhoto as string | undefined,
    },
    {
      title: "Aragon Research Women in Technology Panel",
      role: "Invited Panelist",
      photo: aragonThumbnail as string | undefined,
      event: "",
      date: "September 2024",
      desc: "Joined industry leaders from Five9 and Avaya to discuss how AI is transforming communication, collaboration, and customer engagement. The discussion explored responsible AI implementation, human-AI collaboration, and the role of women in shaping the future of AI-powered communications.",
      highlights: ["AI-driven communications", "Human-AI collaboration", "Responsible AI", "Women in technology leadership"],
    },
  ];

  return (
    <section id="speaking" className="py-6 md:py-10 px-4 md:px-6 border-t border-border/50 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Mic className="w-5 h-5 text-secondary" />
            <h2 className="text-4xl font-serif text-primary">Speaking Engagements & Industry Panels</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl font-light leading-relaxed">
            Sharing insights on AI, product strategy, enterprise innovation, and leadership through industry conferences, executive webinars, and community events. Over the past several years, I've been invited to moderate executive discussions, host industry webinars, serve as a competition judge, and participate in panels alongside leaders from Google Cloud, OpenAI, Meta, SAP, and other technology organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {engagements.map((eng, i) => (
            <motion.div
              key={eng.title}
              id={`speaking-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`card-speaking-${i}`}
              className="bg-white rounded-3xl border border-border/50 shadow-sm overflow-hidden flex flex-col"
            >
              {eng.photo ? (
                <img src={eng.photo} alt={eng.title} className="w-full h-48 object-cover object-top" />
              ) : (
                <div className="h-40 bg-secondary/5 border-b border-border/40 flex items-center justify-center">
                  <Mic className="w-8 h-8 text-secondary/30" />
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-secondary">{eng.role}</span>
                    <span className="text-[10px] text-muted-foreground">&middot;</span>
                    <span className="text-[10px] text-muted-foreground">{eng.date}</span>
                  </div>
                  <h3 className="text-xl font-serif text-primary mb-1">{eng.title}</h3>
                  {eng.event && <p className="text-sm text-muted-foreground">{eng.event}</p>}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{eng.desc}</p>

                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-3">Highlights</p>
                  <ul className="space-y-1.5">
                    {eng.highlights.map((h) => (
                      <li key={h} className="text-sm text-primary/80 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-border/50 bg-background text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-medium">
          © 2026 Meena Ganesh. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          AI Product Marketing Portfolio <span className="mx-2">·</span> San Francisco Bay Area
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

const PRESENCE_SLIDES = [
  { src: ytExplainerThumb as string, caption: "Box AI Explainer Series" },
  { src: boxworksDemo as string, caption: "Keynote demo at BoxWorks 2024" },
  { src: ragathonThumbnail as string, caption: "Panelist at Agentic RAG-a-thon — \"From Idea to Impact: Making Agentic AI Market-Ready\"" },
  { src: aiTrendsWebinarCarousel as string, caption: "Behind the scenes — AI Trends Webinar recording" },
  { src: fundwellBTS as string, caption: "On camera: customer interview on AI-powered data extraction" },
];

function PresenceCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % PRESENCE_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + PRESENCE_SLIDES.length) % PRESENCE_SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % PRESENCE_SLIDES.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <section className="py-4 px-4 md:px-6 border-t border-border/30">
      <div className="w-[90%] md:w-[60%] max-w-[720px] mx-auto">
        <p className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-5">The Work in Action</p>
        <div className="relative select-none">
          <div className="overflow-hidden rounded-xl bg-primary/5 h-[280px] md:h-[420px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={PRESENCE_SLIDES[current].src}
                alt={PRESENCE_SLIDES[current].caption}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover object-center"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white transition-colors flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          <p className="text-center text-sm text-muted-foreground mt-4 px-10 leading-snug">
            {PRESENCE_SLIDES[current].caption}
          </p>

          <div className="flex justify-center gap-2 mt-3">
            {PRESENCE_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-secondary w-6" : "bg-border w-1.5 hover:bg-secondary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-secondary selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <PresenceCarousel />
        <CaseStudies />
        <Speaking />
        <Insights />
        <Influence />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-studies/:slug" component={CaseStudyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
