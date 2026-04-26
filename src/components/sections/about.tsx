import { SectionHeading } from "@/components/section-heading";
import { Zap, Shield, Layers, Database } from "lucide-react";

const highlights = [
  { icon: Zap, label: "10+ APIs Built", desc: "Authentication, user mgmt, workflows" },
  { icon: Shield, label: "JWT & OAuth", desc: "Secure auth across multiple apps" },
  { icon: Layers, label: "Microservices", desc: "Modular Node.js & NestJS modules" },
  { icon: Database, label: "Docker Deploys", desc: "Containerized backend services" },
];

export function About() {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="container-narrow">
        <SectionHeading eyebrow="01 — About" title="Backend-focused, detail-driven" />
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Backend Developer specializing in Node.js, RESTful APIs, and scalable systems.
          Hands-on with SaaS applications, secure authentication, microservices
          architecture, and containerized deployments. Passionate about building
          reliable, high-performance backends that scale.
        </p>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <h.icon className="size-5" />
              </div>
              <p className="mt-4 font-semibold">{h.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
