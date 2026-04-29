import { useEffect, useState } from "react";

const BOOT_LINES = [
  "$ initializing runtime · v19.2",
  "$ mounting backend modules → ok",
  "$ negotiating tls handshake → 256-bit",
  "$ hydrating portfolio shell → done",
  "$ ready. welcome.",
];

const TOTAL_DURATION = 2400;

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setVisibleLines((n) => Math.min(n + 1, BOOT_LINES.length));
    }, TOTAL_DURATION / (BOOT_LINES.length + 1));

    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / TOTAL_DURATION);
      setPercent(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => setExiting(true), TOTAL_DURATION + 250);
    const doneTimer = setTimeout(onDone, TOTAL_DURATION + 250 + 850);

    return () => {
      clearInterval(lineInterval);
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background ${
        exiting ? "animate-loader-out pointer-events-none" : ""
      }`}
      style={{ perspective: "1400px" }}
    >
      {/* Grid floor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-[120vh] grid-floor opacity-[0.18]"
          style={{
            transform: "rotateX(62deg) translateY(28%)",
            transformOrigin: "center bottom",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background" />
      </div>

      {/* Centered console */}
      <div className="relative z-10 w-[min(560px,90vw)] preserve-3d">
        {/* Rotating cube */}
        <div className="relative mx-auto mb-10 grid place-items-center" style={{ perspective: "800px" }}>
          <div
            className="relative size-[120px] preserve-3d"
            style={{
              animation: "cube-tumble-full 8s linear infinite",
              transformStyle: "preserve-3d",
            }}
          >
            {[
              { t: "translateZ(60px)", label: "GET" },
              { t: "rotateY(180deg) translateZ(60px)", label: "POST" },
              { t: "rotateY(90deg) translateZ(60px)", label: "PUT" },
              { t: "rotateY(-90deg) translateZ(60px)", label: "DEL" },
              { t: "rotateX(90deg) translateZ(60px)", label: "API" },
              { t: "rotateX(-90deg) translateZ(60px)", label: "200" },
            ].map((face) => (
              <div
                key={face.label}
                className="absolute inset-0 grid place-items-center rounded-md border border-primary/60 bg-primary/[0.04] font-mono text-[11px] tracking-widest text-primary backdrop-blur-sm"
                style={{
                  transform: face.t,
                  boxShadow: "inset 0 0 24px color-mix(in oklab, var(--color-primary) 25%, transparent)",
                }}
              >
                {face.label}
              </div>
            ))}
          </div>
        </div>

        {/* Brand line */}
        <div className="text-center">
          <p className="font-display text-xs tracking-[0.35em] text-muted-foreground">
            VANSH ⟶ JAISWAL
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
            backend.runtime
          </h2>
        </div>

        {/* Terminal block */}
        <div className="mt-8 rounded-xl border border-border bg-card/70 p-5 font-mono text-[12.5px] leading-relaxed backdrop-blur-md">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-warm/80" />
            <span className="size-2.5 rounded-full bg-primary/60" />
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
            <span className="ml-3 text-[10px] text-muted-foreground">~/portfolio · zsh</span>
          </div>
          <div className="space-y-1.5">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <p
                key={line}
                className="animate-type-in text-muted-foreground"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-primary">›</span>{" "}
                <span className={i === visibleLines - 1 ? "text-foreground" : ""}>
                  {line.replace("$ ", "")}
                </span>
              </p>
            ))}
            {visibleLines < BOOT_LINES.length && (
              <span className="inline-block size-2 translate-y-0.5 bg-primary animate-blink" />
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 flex items-center gap-4">
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-primary"
              style={{ width: `${percent}%`, transition: "width 60ms linear" }}
            />
            <div
              className="absolute inset-0 shimmer-bg"
              style={{ opacity: percent < 100 ? 0.7 : 0 }}
            />
          </div>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {String(percent).padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
