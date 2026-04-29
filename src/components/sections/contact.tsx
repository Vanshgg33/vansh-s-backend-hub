import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { Mail, Github, MapPin, Download, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 scroll-mt-16 scene-3d">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="05 / contact"
          title="Let's build something solid."
          description="Open to backend roles, freelance API work, and collaborations."
          align="center"
        />

        <div style={{ perspective: "1500px" }}>
          <TiltCard
            intensity={6}
            className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 md:p-14 glow-ring"
          >
            {/* Backdrop grid */}
            <div
              className="pointer-events-none absolute inset-0 grid-floor opacity-[0.07]"
              style={{
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
              }}
            />

            {/* Glow */}
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/20 blur-[100px]" />

            <div className="relative text-center preserve-3d">
              <p className="chip-mono text-primary mb-4">› ping me</p>

              <a
                href="mailto:jaiswalvansh96@gmail.com"
                className="group inline-flex items-baseline gap-3 font-display text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-gradient transition-opacity hover:opacity-90"
                style={{ transform: "translateZ(40px)" }}
              >
                jaiswalvansh96@gmail.com
                <ArrowUpRight className="size-7 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full px-7 font-mono uppercase tracking-wider text-xs"
                >
                  <a href="mailto:jaiswalvansh96@gmail.com">
                    <Mail className="mr-2 size-4" /> send_email
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-primary/30 bg-card/30 px-7 font-mono uppercase tracking-wider text-xs backdrop-blur hover:bg-card/60 hover:border-primary/60"
                >
                  <a href="https://github.com/Vanshgg33" target="_blank" rel="noreferrer">
                    <Github className="mr-2 size-4" /> github
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-warm/30 bg-card/30 px-7 font-mono uppercase tracking-wider text-xs text-warm backdrop-blur hover:bg-card/60 hover:border-warm/60"
                >
                  <a href="/Vansh_Jaiswal_Resume.pdf" download="Vansh_Jaiswal_Resume.pdf">
                    <Download className="mr-2 size-4" /> resume.pdf
                  </a>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-mono text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-3.5 text-primary" /> nagpur, maharashtra
                </span>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-2 tabular-nums">
                  <span className="size-1.5 rounded-full bg-primary" /> +91 7249782852
                </span>
              </div>
            </div>
          </TiltCard>
        </div>

        <footer className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-mono text-muted-foreground">
          <p>
            © {new Date().getFullYear()} <span className="text-foreground">vansh jaiswal</span>{" "}
            · built with node-grade obsession
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              system online
            </span>
            <span className="text-border">·</span>
            <span className="text-xs uppercase tracking-widest">v.4.7</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
