import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { Zap, Shield, Layers, Database } from "lucide-react";

const highlights = [
  { icon: Zap, label: "10+ APIs", desc: "auth · users · workflows", code: "/api/v1" },
  { icon: Shield, label: "JWT & OAuth", desc: "secure auth across apps", code: "rbac" },
  { icon: Layers, label: "Microservices", desc: "node.js & nestjs modules", code: "modular" },
  { icon: Database, label: "Docker", desc: "containerized backends", code: "deploy" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 scroll-mt-16 scene-3d">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="01 / about" title="Backend-focused, detail-driven." />
            <p className="text-base text-muted-foreground leading-relaxed">
              I specialize in <span className="text-foreground">Node.js, RESTful APIs, and scalable systems.</span>{" "}
              Hands-on experience with SaaS applications, secure authentication, microservices architecture,
              and containerized deployments — with a passion for building reliable, high-performance backends that scale.
            </p>

            <div className="mt-6 rounded-xl border border-border bg-card/40 p-4 font-mono text-xs text-muted-foreground backdrop-blur">
              <div className="flex items-center gap-2 text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                currently
              </div>
              <p className="mt-2">
                <span className="text-foreground">›</span> shipping backend infra at{" "}
                <span className="text-warm">arobuz</span> — scraping pipelines, trend analysis, CRM, RBAC.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" style={{ perspective: "1100px" }}>
            {highlights.map((h, i) => (
              <TiltCard
                key={h.label}
                intensity={12}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-11 place-items-center rounded-lg border border-primary/30 bg-primary/[0.06] text-primary">
                    <h.icon className="size-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {h.code}
                  </span>
                </div>
                <p className="mt-5 font-display text-lg font-semibold text-foreground">{h.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
