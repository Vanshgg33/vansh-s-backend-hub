import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Backend Developer (Node.js)",
    company: "Arobuz Growth Agency",
    period: "current",
    tag: "in_progress",
    points: [
      "Developed scalable backend services using Node.js and NestJS for SaaS-based applications, exposing 10+ RESTful APIs across authentication, user management, and core business workflows.",
      "Implemented secure JWT and OAuth authentication systems across services, with role-based access control (RBAC) for fine-grained permissions across admins, analysts, and end users.",
      "Built a data scraping pipeline that aggregates social media signals — profiles, posts, and trends (including Twitter) — for automated insights and downstream analysis.",
      "Developed a CRM system for managing users, leads, and interaction history, with pipeline-stage APIs and activity timelines consumed by internal dashboards.",
      "Built a project management system with modules for task tracking, team collaboration, and end-to-end workflow management.",
      "Contributed to a real-time meeting platform (Google Meet–style), implementing participant management, room lifecycle, and admin-based access controls.",
      "Developed an ads management portal integrating Meta Ads and Google Ads APIs, enabling users to connect accounts and manage ad campaigns end-to-end.",
      "Integrated AI-based analysis modules (LLM APIs) to process collected data and generate trend summaries, content insights, and lead-qualification signals.",
      "Worked across MongoDB and MySQL for flexible and relational data needs; containerized services with Docker and contributed to a microservices architecture.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Resonit",
    period: "feb 2025 — jul 2025",
    tag: "shipped",
    points: [
      "Built a production-grade e-commerce platform end-to-end on Spring Boot, Java, and React with MySQL, shipping product catalog, cart, and order management modules backed by RESTful APIs and Spring Data JPA.",
      "Designed and exposed REST APIs for user authentication and registration workflows, securing endpoints with JWT and enforcing role-based access control (RBAC) via Spring Security across customer and admin roles.",
      "Integrated the Razorpay payment gateway end-to-end — checkout initiation, webhook-based order confirmation, and failure/retry handling — ensuring reliable transaction state across all order flows.",
      "Modeled MySQL schemas for products, carts, orders, and payments with proper foreign-key relationships, and tuned queries and indexes to keep API response times low under concurrent customer sessions.",
      "Built and consumed REST endpoints from the React frontend, wiring up cart state, order tracking, and admin dashboards against the Spring Boot backend.",
      "Worked alongside design, frontend, and product to translate business requirements into clean, well-documented backend contracts and shipped features through a full code-review and PR workflow on Git.",
      "Investigated and fixed production-grade bugs across auth, cart, and payment flows, hardening edge cases around webhook idempotency and partial-failure recovery.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 scroll-mt-16 scene-3d">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="03 / work"
          title="Where I've built things."
          description="A timeline of the production systems I've designed, deployed, and maintained."
        />

        <div className="relative" style={{ perspective: "1300px" }}>
          {/* Vertical rail */}
          <div className="pointer-events-none absolute left-5 md:left-7 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-7">
            {jobs.map((job, idx) => (
              <div key={job.company} className="relative pl-14 md:pl-20">
                {/* Marker — 3D node */}
                <div
                  className="absolute left-0 top-2 grid size-11 md:size-14 place-items-center rounded-xl border border-primary/40 bg-card text-primary preserve-3d"
                  style={{
                    transform: "translateZ(20px) rotateY(-12deg)",
                    boxShadow: "0 12px 40px -12px color-mix(in oklab, var(--color-primary) 40%, transparent)",
                  }}
                >
                  <Briefcase className="size-4 md:size-5" />
                  <span className="absolute -top-2 -right-2 size-4 grid place-items-center rounded-full bg-background border border-primary/40 font-mono text-[9px] text-primary">
                    {idx + 1}
                  </span>
                </div>

                <TiltCard
                  intensity={6}
                  className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/30"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="chip-mono text-warm">{job.tag}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-mono text-sm text-primary">@ {job.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/[0.05] px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {job.period}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-2.5">
                    {job.points.map((p, i) => (
                      <div
                        key={p}
                        className="group flex gap-3 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 font-mono text-[10px] text-primary/60 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 group-hover:text-foreground transition-colors">{p}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
