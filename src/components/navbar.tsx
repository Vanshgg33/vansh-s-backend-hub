import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "about", index: "01" },
  { href: "#skills", label: "skills", index: "02" },
  { href: "#experience", label: "work", index: "03" },
  { href: "#projects", label: "projects", index: "04" },
  { href: "#contact", label: "contact", index: "05" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/65 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-display font-semibold preserve-3d"
        >
          <span
            className="grid size-9 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:[transform:rotateY(180deg)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Terminal className="size-4" />
          </span>
          <span className="flex items-baseline gap-1.5">
            <span className="tracking-tight">vansh</span>
            <span className="text-primary">/</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/40 px-1.5 py-1 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-mono text-[10px] text-primary/70 mr-1.5">{l.index}</span>
              <span>{l.label}</span>
              <span className="absolute inset-0 rounded-full bg-primary/0 transition-colors group-hover:bg-primary/10" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:jaiswalvansh96@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            available
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
