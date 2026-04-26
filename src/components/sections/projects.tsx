import { SectionHeading } from "@/components/section-heading";
import { Star, ExternalLink, Folder } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
  link?: string;
};

const projects: Project[] = [
  {
    title: "WhatsApp Commerce Backend System",
    description:
      "Backend-driven WhatsApp commerce platform with RBAC for packer/biller/delivery roles, real-time inventory APIs, Meta Catalog sync, and instant billing through WhatsApp Business workflows.",
    stack: ["NestJS", "Node.js", "MongoDB", "RBAC", "WhatsApp API"],
    featured: true,
  },
  {
    title: "Restaurant Management & Ordering",
    description:
      "End-to-end restaurant system with order processing APIs, admin dashboard, and a KOT (Kitchen Order Ticket) system for streamlined kitchen workflows.",
    stack: ["Node.js", "REST APIs", "MySQL"],
    link: "https://www.rangeeladhaba.in/",
  },
  {
    title: "Card Management System",
    description:
      "Secure backend system for managing card-related data with authentication, MySQL integration, and clean REST API design.",
    stack: ["Spring Boot", "REST APIs", "MySQL"],
  },
  {
    title: "Medical Diagnostic Center App",
    description:
      "Backend services managing diagnostic center operations with secure API endpoints and patient data handling.",
    stack: ["Spring Boot", "REST APIs", "MySQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-16 bg-muted/30">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work"
          description="A focus on backend systems, secure APIs, and real-world integrations."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative flex flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                p.featured
                  ? "border-primary/40 glow-ring md:col-span-2"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  {p.featured ? <Star className="size-5 fill-primary" /> : <Folder className="size-5" />}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Visit project"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-background border border-border px-2.5 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
