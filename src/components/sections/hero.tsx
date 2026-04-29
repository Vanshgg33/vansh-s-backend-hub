import { useEffect, useRef, useState } from "react";
import { Download, ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ORBIT_TOKENS = ["Node.js", "NestJS", "MongoDB", "Docker", "JWT", "OAuth"];

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const node = heroRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const tx = mouse.x * 12;
  const ty = mouse.y * 8;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden pt-36 pb-32 scene-3d"
    >
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left — text block */}
          <div className="preserve-3d animate-fade-up">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 backdrop-blur-md"
              style={{ transform: `translate3d(${tx * 0.4}px, ${ty * 0.3}px, 30px)` }}
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative size-2 rounded-full bg-primary" />
              </span>
              <span className="chip-mono text-foreground">available · q2 ’26</span>
            </div>

            <div
              className="mt-8 preserve-3d"
              style={{
                transform: `perspective(1200px) rotateX(${ty * -1.2}deg) rotateY(${tx * 1.6}deg)`,
                transition: "transform 200ms ease-out",
              }}
            >
              <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.92] tracking-tighter">
                <span className="block text-foreground/95">vansh</span>
                <span className="block text-gradient">jaiswal.</span>
              </h1>

              <div className="mt-5 flex items-center gap-3 font-mono text-sm">
                <span className="h-px w-10 bg-primary/60" />
                <span className="text-primary">backend engineer</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">node · nestjs · microservices</span>
              </div>
            </div>

            <p
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
              style={{ transform: `translate3d(${tx * 0.3}px, 0, 20px)` }}
            >
              I architect <span className="text-foreground">scalable backend systems</span> —
              REST APIs, secure auth, microservices, and containerized deployments.
              Currently shipping SaaS infrastructure at Arobuz.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row gap-3"
              style={{ transform: `translate3d(${tx * 0.2}px, 0, 16px)` }}
            >
              <Button asChild size="lg" className="group h-12 rounded-full px-7 font-mono uppercase tracking-wider text-xs">
                <a href="/Vansh_Jaiswal_Resume.pdf" download="Vansh_Jaiswal_Resume.pdf">
                  <Download className="mr-2 size-4 transition-transform group-hover:-translate-y-0.5" />
                  download_resume
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group h-12 rounded-full border-primary/30 bg-card/30 px-7 font-mono uppercase tracking-wider text-xs backdrop-blur hover:bg-card/60 hover:border-primary/60"
              >
                <a href="#projects">
                  view_projects
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground font-mono"
              style={{ transform: `translate3d(${tx * 0.15}px, 0, 8px)` }}
            >
              <a href="mailto:jaiswalvansh96@gmail.com" className="group inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="size-3.5 text-primary" />
                <span className="border-b border-dashed border-border group-hover:border-primary/60">
                  jaiswalvansh96@gmail.com
                </span>
              </a>
              <a href="https://github.com/Vanshgg33" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Github className="size-3.5 text-primary" />
                <span className="border-b border-dashed border-border group-hover:border-primary/60">
                  Vanshgg33
                </span>
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5 text-primary" /> nagpur, in
              </span>
            </div>
          </div>

          {/* Right — 3D scene */}
          <div className="relative h-[480px] preserve-3d">
            <HeroScene mouse={mouse} />
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 backdrop-blur"
          style={{ transform: `translate3d(${tx * 0.1}px, 0, 6px)` }}
        >
          {[
            { value: "10+", label: "rest endpoints shipped" },
            { value: "2 yrs", label: "production node.js" },
            { value: "5+", label: "microservices deployed" },
            { value: "99.9%", label: "auth uptime" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/80 px-5 py-6">
              <p className="font-display text-3xl font-semibold text-foreground">{stat.value}</p>
              <p className="mt-1 chip-mono text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroScene({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <div
      className="absolute inset-0 grid place-items-center"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {/* Backplate frame */}
      <div
        className="absolute inset-6 rounded-3xl border border-border bg-card/30 backdrop-blur-md"
        style={{
          transform: `rotateY(${mouse.x * 6}deg) rotateX(${mouse.y * -4}deg) translateZ(-40px)`,
          boxShadow: "inset 0 0 80px color-mix(in oklab, var(--color-primary) 8%, transparent)",
        }}
      >
        <div className="absolute inset-x-0 top-0 px-4 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-primary" /> system.online
          </span>
          <span>03:42 utc</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-4 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground border-t border-border">
          <span>v.4.7 · runtime</span>
          <span className="text-primary">● 200 ok</span>
        </div>
      </div>

      {/* Center cube + orbit */}
      <div
        className="relative size-[200px] preserve-3d"
        style={{
          transform: `rotateY(${mouse.x * 14}deg) rotateX(${mouse.y * -10}deg)`,
          transition: "transform 200ms ease-out",
        }}
      >
        {/* Rotating cube */}
        <div
          className="absolute left-1/2 top-1/2 size-[120px] -translate-x-1/2 -translate-y-1/2 preserve-3d"
          style={{
            animation: "cube-tumble 18s linear infinite",
            transformStyle: "preserve-3d",
          }}
        >
          {[
            { t: "translateZ(60px)", label: "{ }", color: "primary" },
            { t: "rotateY(180deg) translateZ(60px)", label: "API", color: "primary" },
            { t: "rotateY(90deg) translateZ(60px)", label: "→", color: "warm" },
            { t: "rotateY(-90deg) translateZ(60px)", label: "λ", color: "warm" },
            { t: "rotateX(90deg) translateZ(60px)", label: "200", color: "primary" },
            { t: "rotateX(-90deg) translateZ(60px)", label: "v1", color: "primary" },
          ].map((face) => (
            <div
              key={face.label}
              className={`absolute inset-0 grid place-items-center rounded-md border font-display text-2xl font-semibold ${
                face.color === "primary"
                  ? "border-primary/50 bg-primary/[0.06] text-primary"
                  : "border-warm/50 bg-warm/[0.06] text-warm"
              }`}
              style={{
                transform: face.t,
                boxShadow: `inset 0 0 32px color-mix(in oklab, var(--color-${face.color}) 22%, transparent), 0 0 24px color-mix(in oklab, var(--color-${face.color}) 18%, transparent)`,
                backdropFilter: "blur(2px)",
              }}
            >
              {face.label}
            </div>
          ))}
        </div>

        {/* Orbit ring 1 */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[280px] rounded-full border border-dashed border-primary/30"
          style={{ transform: "translate(-50%, -50%) rotateX(70deg)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[400px] rounded-full border border-dashed border-warm/20"
          style={{ transform: "translate(-50%, -50%) rotateX(72deg) rotateZ(30deg)" }}
        />

        {/* Orbit nodes */}
        {ORBIT_TOKENS.map((token, i) => {
          const isOuter = i % 2 === 0;
          return (
            <span
              key={token}
              className="absolute left-1/2 top-1/2 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur shadow-md"
              style={{
                animation: `${isOuter ? "orbit-rev" : "orbit"} ${14 + i * 1.5}s linear infinite`,
                animationDelay: `${i * -1.6}s`,
                transformOrigin: "center center",
              }}
            >
              <span className="size-1 rounded-full bg-primary" />
              {token}
            </span>
          );
        })}
      </div>

      {/* Corner markers */}
      {[
        "top-2 left-2 border-t border-l",
        "top-2 right-2 border-t border-r",
        "bottom-2 left-2 border-b border-l",
        "bottom-2 right-2 border-b border-r",
      ].map((pos) => (
        <span
          key={pos}
          className={`absolute size-5 border-primary/60 ${pos}`}
        />
      ))}
    </div>
  );
}
