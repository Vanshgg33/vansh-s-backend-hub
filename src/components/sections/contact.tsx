import { SectionHeading } from "@/components/section-heading";
import { Mail, Github, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-16">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's build something solid"
          description="Open to backend roles, freelance API work, and collaborations."
        />

        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 text-center glow-ring">
          <a
            href="mailto:jaiswalvansh96@gmail.com"
            className="inline-block text-2xl sm:text-4xl font-bold tracking-tight text-gradient hover:opacity-80 transition-opacity"
          >
            jaiswalvansh96@gmail.com
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:jaiswalvansh96@gmail.com">
                <Mail className="mr-2 size-4" /> Send Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com/Vanshgg33" target="_blank" rel="noreferrer">
                <Github className="mr-2 size-4" /> GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/Vansh_Jaiswal_Resume.pdf" download="Vansh_Jaiswal_Resume.pdf">
                <Download className="mr-2 size-4" /> Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> Nagpur, Maharashtra
            </span>
            <span className="inline-flex items-center gap-2 font-mono">
              +91 7249782852
            </span>
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vansh Jaiswal · Built with Node-grade obsession.
        </footer>
      </div>
    </section>
  );
}
