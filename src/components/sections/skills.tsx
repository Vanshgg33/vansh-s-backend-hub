import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { Server, Database, Code2, Layout, Wrench } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "backend",
    code: "stack.runtime",
    items: ["Node.js", "NestJS", "REST APIs", "JWT", "OAuth", "Microservices"],
  },
  {
    icon: Database,
    title: "databases",
    code: "stack.persistence",
    items: ["MongoDB", "MySQL", "SQL"],
  },
  {
    icon: Code2,
    title: "languages",
    code: "stack.lang",
    items: ["JavaScript", "TypeScript", "Java"],
  },
  {
    icon: Layout,
    title: "frontend",
    code: "stack.client",
    items: ["Angular", "React", "HTML", "CSS"],
  },
  {
    icon: Wrench,
    title: "tooling",
    code: "stack.ops",
    items: ["Docker", "Git", "IntelliJ IDEA", "Eclipse"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 scroll-mt-16 scene-3d">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="02 / skills"
          title="The technical toolkit."
          description="A focused stack chosen for backend reliability, security, and clean API design."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5" style={{ perspective: "1200px" }}>
          {groups.map((g, i) => (
            <TiltCard
              key={g.title}
              intensity={9}
              className={`rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40 lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="grid size-12 place-items-center rounded-xl border border-primary/30 bg-primary/[0.07] text-primary preserve-3d"
                    style={{
                      transform: "translateZ(20px)",
                      boxShadow: "inset 0 0 24px color-mix(in oklab, var(--color-primary) 18%, transparent)",
                    }}
                  >
                    <g.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground lowercase">
                      {g.title}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                      {g.code}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-primary/70 tabular-nums">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="group/chip relative inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-mono text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground hover:-translate-y-0.5 cursor-default"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="size-1 rounded-full bg-primary/60 group-hover/chip:bg-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
