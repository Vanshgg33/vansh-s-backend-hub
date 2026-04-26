import { SectionHeading } from "@/components/section-heading";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Backend Developer (Node.js)",
    company: "Arobuz Growth Agency",
    period: "Current",
    points: [
      "Developed and maintained scalable backend services using Node.js and NestJS for SaaS applications.",
      "Built RESTful APIs for authentication, user management, and core business logic.",
      "Implemented secure JWT and OAuth authentication, improving access control and security.",
      "Contributed to microservices-based architecture for modular, independently deployable services.",
      "Integrated MongoDB and MySQL for efficient data storage and retrieval.",
      "Containerized backend services using Docker for consistent deployments.",
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
