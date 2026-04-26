import { SectionHeading } from "@/components/section-heading";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Backend Developer (Node.js)",
    company: "Arobuz Growth Agency",
    period: "Current",
    points: [
      "Architected and shipped backend services in Node.js and NestJS for SaaS products, exposing 10+ RESTful APIs across authentication, user management, and core business workflows.",
      "Designed and implemented a data scraping pipeline that aggregates social media signals (profiles, posts, trends) from multiple sources, normalizing them into a unified schema for downstream analysis.",
      "Built a Twitter-focused trend analysis service that processes scraped data to surface emerging topics, hashtags, and engagement patterns through queryable APIs.",
      "Developed a profile and trend management system with CRUD APIs, tagging, and historical tracking, backed by MongoDB for flexible schemas and MySQL for relational entities.",
      "Built a CRM backend for managing users, leads, and interaction history, including pipeline-stage APIs and activity timelines consumed by internal dashboards.",
      "Integrated AI-driven analysis (LLM APIs) on collected data to generate trend summaries, content insights, and lead-qualification signals, with caching to control cost and latency.",
      "Implemented role-based access control (RBAC) and JWT/OAuth authentication across services, enforcing fine-grained permissions for admins, analysts, and CRM users.",
      "Containerized services with Docker and contributed to a microservices architecture, enabling independent deployment of scraping, analysis, CRM, and auth modules.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Resonit",
    period: "Previous",
    points: [
      "Developed and integrated REST APIs for authentication and user workflows.",
      "Implemented JWT-based authentication systems, enhancing application security.",
      "Contributed to backend feature development and API integration.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-16">
      <div className="container-narrow">
        <SectionHeading eyebrow="03 — Experience" title="Where I've built things" />
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-5" />
          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.company} className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-1 grid size-9 md:size-11 place-items-center rounded-full border border-border bg-card text-primary">
                  <Briefcase className="size-4" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg">{job.role}</h3>
                      <p className="text-primary font-mono text-sm mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground rounded-full border border-border px-3 py-1">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
