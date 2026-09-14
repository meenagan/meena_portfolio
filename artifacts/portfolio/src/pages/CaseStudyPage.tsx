import { useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check, Sparkles, ArrowRight, Target, Compass, Zap } from "lucide-react";
import { caseStudyBySlug } from "../data/case-studies";
import boxAILaunchesPhoto from "@assets/20260605_104738-COLLAGE_1780681702436.jpg";

function BackHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-serif text-xl font-medium tracking-tight text-primary">
          Meena Ganesh
        </a>
        <a
          href="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </a>
      </div>
    </header>
  );
}

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudyBySlug[slug] : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <BackHeader />
        <div className="pt-32 px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-serif text-primary mb-4">Case Study Not Found</h1>
          <a href="/" className="text-secondary hover:underline">
            Return to Portfolio
          </a>
        </div>
      </div>
    );
  }

  const hasActionContent = study.action || (study.actionBullets && study.actionBullets.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <BackHeader />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-border/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-secondary">
              {study.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-primary mt-3 mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {study.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo (Box AI Product Launches only) */}
      {study.photo === "box-ai-launches" && (
        <div className="px-6">
          <div className="max-w-4xl mx-auto">
            <img
              src={boxAILaunchesPhoto}
              alt="Box AI Product Launches"
              className="w-full rounded-2xl object-cover max-h-72 object-center shadow-sm"
            />
          </div>
        </div>
      )}

      {/* Stats (AI Discover Page) */}
      {study.stats && study.stats.length > 0 && (
        <section className="py-12 px-6 bg-secondary/5 border-b border-border/40">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-serif text-secondary mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Challenge / Approach / Action — 3-up grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-secondary" />
                <h2 className="text-xs font-bold tracking-widest uppercase text-secondary">Challenge</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-secondary" />
                <h2 className="text-xs font-bold tracking-widest uppercase text-secondary">Approach</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.approach}</p>
            </motion.div>

            {hasActionContent && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-secondary" />
                  <h2 className="text-xs font-bold tracking-widest uppercase text-secondary">Action</h2>
                </div>
                {study.action && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{study.action}</p>
                )}
                {study.actionBullets && study.actionBullets.length > 0 && (
                  <ul className="space-y-2">
                    {study.actionBullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary mt-1 shrink-0">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-border/40" />

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-bold tracking-widest uppercase text-secondary mb-5">Results</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-primary/80 leading-snug">{r}</span>
                </li>
              ))}
            </ul>

            {/* Activation / strategic impact (AI Discover Page) */}
            {study.activationImpact && study.activationImpact.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">
                  Activation Impact
                </p>
                <ul className="space-y-2">
                  {study.activationImpact.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-primary/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {study.strategicImpact && (
              <p className="mt-4 text-sm text-muted-foreground italic border-l-2 border-secondary/30 pl-4">
                {study.strategicImpact}
              </p>
            )}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-border/40" />

          {/* Key Learning */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/5 rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-secondary" />
              <h2 className="text-xs font-bold tracking-widest uppercase text-secondary">Key Learning</h2>
            </div>
            <p className="text-xl font-serif text-primary leading-relaxed">
              "{study.detailKeyLearning}"
            </p>
          </motion.div>

          {/* Links */}
          {(study.externalLinks.length > 0 || study.productLinks) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3"
            >
              <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                Supporting Assets
              </h2>
              <div className="flex flex-wrap gap-3">
                {study.externalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-secondary/30 text-secondary text-sm font-semibold hover:bg-secondary/5 transition-colors"
                  >
                    {link.text}
                    {link.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </a>
                ))}
                {study.productLinks &&
                  study.productLinks.map((pl) => (
                    <a
                      key={pl.text}
                      href={pl.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-secondary/30 text-secondary text-sm font-semibold hover:bg-secondary/5 transition-colors"
                    >
                      {pl.text}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
              </div>
            </motion.div>
          )}

          {/* Back CTA */}
          <div className="pt-8 border-t border-border/40">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all case studies
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border/50 bg-background text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Meena Ganesh · AI Product Marketing Portfolio
        </p>
      </footer>
    </div>
  );
}
