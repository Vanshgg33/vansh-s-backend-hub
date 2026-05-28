import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { Star, ExternalLink, Folder, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
  link?: string;
  index: string;
};

const projects: Project[] = [
  {
    index: "001",
    title: "WhatsApp Commerce — Bot + Dashboard",
    description:
      "End-to-end WhatsApp store: a customer-facing WhatsApp bot wired to an admin dashboard where the entire business runs. The bot handles product browsing, ordering, and instant billing inside chat; the dashboard exposes a unified inbox for every customer thread — admins can read, reply, and triage live conversations from one place. Stock management is fully centralized: real-time inventory sync, product catalog, coupons, banners, and pricing all flow from the dashboard back to the bot. RBAC separates packer / biller / delivery roles, Meta Catalog stays in sync automatically, and order lifecycle events fire back to customers over WhatsApp the moment status changes.",
    stack: ["NestJS", "Node.js", "MongoDB", "WhatsApp Cloud API", "Meta Catalog", "RBAC", "JWT"],
    featured: true,
  },
  {
    index: "002",
    title: "Rangeela Dhaba — Restaurant & Ordering",
    description:
      "Full-stack restaurant management system with order processing, KOT (Kitchen Order Ticket) workflow, admin dashboard for products / coupons / banners, RBAC, JWT auth, and analytics for orders and user activity.",
    stack: ["NestJS", "React", "MongoDB", "JWT", "RBAC"],
    link: "https://www.rangeeladhaba.in/",
  },
  {
    index: "003",
    title: "Amazeballs — Informational Web Platform",
    description:
      "Designed and shipped a public-facing informational website with a clean, content-driven layout, responsive sections, and SEO-friendly structure. Built with a fast static-rendering pipeline for low TTFB and optimized asset delivery, ensuring smooth performance across devices.",
    stack: ["Next.js", "React", "Tailwind CSS", "SEO", "Responsive UI"],
    link: "https://amazeballs.in/",
  },
  {
    index: "004",
    title: "Multi-Platform Social Media Crawler",
    description:
      "GraphQL-intercepting crawler for Twitter/X, LinkedIn, and Instagram built on FastAPI, paired with a Next.js operator dashboard. Delivers sub-3-second profile extraction and a 50% reduction in manual data review time. Modular scraper architecture with pluggable platform adapters makes it extensible to new social networks with minimal code changes and zero disruption to existing pipelines. Supports live Twitter trend search and discovery directly from the dashboard.",
    stack: ["Python", "FastAPI", "Playwright", "crawl4ai", "Next.js"],
    link: "http://20.40.58.86:3700/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 scroll-mt-16 scene-3d">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="04 / projects"
          title="Selected work."
          description="A focus on backend systems, secure APIs, and real-world integrations."
        />

        <div className="grid md:grid-cols-2 gap-5" style={{ perspective: "1300px" }}>
          {projects.map((p) => (
            <TiltCard
              key={p.title}
              intensity={p.featured ? 7 : 10}
              className={`group flex flex-col rounded-2xl p-7 transition-colors ${
                p.featured
                  ? "md:col-span-2 border border-primary/40 bg-card glow-ring"
                  : "border border-border bg-card hover:border-primary/30"
              }`}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-warm/40 bg-warm/[0.06] px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-warm">
                  <span className="size-1 rounded-full bg-warm animate-pulse" />
                  flagship
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className="grid size-12 place-items-center rounded-xl border border-primary/30 bg-primary/[0.07] text-primary preserve-3d"
                  style={{
                    transform: "translateZ(20px)",
                    boxShadow: "inset 0 0 24px color-mix(in oklab, var(--color-primary) 18%, transparent)",
                  }}
                >
                  {p.featured ? <Star className="size-5 fill-primary" /> : <Folder className="size-5" />}
                </div>
                <div className="flex-1">
                  <p className="chip-mono text-muted-foreground">project — {p.index}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-foreground leading-tight">
                    {p.title}
                  </h3>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-9 place-items-center rounded-full border border-border bg-background/40 text-muted-foreground transition-all hover:text-primary hover:border-primary/60 hover:-translate-y-0.5 hover:rotate-12"
                    aria-label="Visit project"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-[11px] font-mono text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden lg:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    visit <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
