import { Download, ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-narrow text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-mono backdrop-blur">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          Available for backend opportunities
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gradient">
          Vansh Jaiswal
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-mono text-primary">
          Backend Developer · Node.js
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          Building scalable backend systems, APIs, and secure authentication
          solutions with Node.js, NestJS, and microservices architecture.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="group">
            <a href="/Vansh_Jaiswal_Resume.pdf" download="Vansh_Jaiswal_Resume.pdf">
              <Download className="mr-2 size-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="group">
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <a
            href="mailto:jaiswalvansh96@gmail.com"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="size-4" /> jaiswalvansh96@gmail.com
          </a>
          <a
            href="https://github.com/Vanshgg33"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Github className="size-4" /> Vanshgg33
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4" /> Nagpur, India
          </span>
        </div>
      </div>
    </section>
  );
}
