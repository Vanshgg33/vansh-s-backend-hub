import { SectionHeading } from "@/components/section-heading";
import { Server, Database, Layout, Wrench } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "JWT", "OAuth", "Microservices"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQL"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["Angular", "HTML", "CSS"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Docker", "Git", "IntelliJ", "Eclipse"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-16 bg-muted/30">
      <div className="container-narrow">
        <SectionHeading eyebrow="02 — Skills" title="Technical toolkit" />
        <div className="grid sm:grid-cols-2 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <g.icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-3 py-1 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
