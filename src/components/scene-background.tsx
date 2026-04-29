import { useEffect, useState } from "react";

const FLOATING_TOKENS = [
  "{ }", "[ ]", "200", "POST", "GET", "JWT", "200", "401", "/api", "REST",
  "→", "node", "ts", "{ id }", "201", "PATCH", "0xff", "{}", "λ",
];

type Particle = {
  id: number;
  text: string;
  x: number;
  y: number;
  z: number;
  delay: number;
  duration: number;
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    text: FLOATING_TOKENS[i % FLOATING_TOKENS.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 200 - 100,
    delay: Math.random() * 6,
    duration: 8 + Math.random() * 12,
  }));
}

export function SceneBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [particles] = useState(() => makeParticles(18));

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Far field — perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-[-40vh] h-[140vh]"
        style={{
          perspective: "900px",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 grid-floor opacity-[0.16] dark:opacity-25"
          style={{
            transform: `rotateX(64deg) translateY(0%) translateX(${mouse.x * 6}px)`,
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Glow orbs (parallax) */}
      <div
        className="absolute top-[8%] left-[58%] size-[460px] rounded-full bg-primary/[0.18] blur-[110px] transition-transform duration-300"
        style={{ transform: `translate3d(${mouse.x * -28}px, ${mouse.y * -22}px, 0)` }}
      />
      <div
        className="absolute top-[55%] left-[10%] size-[340px] rounded-full bg-warm/15 blur-[110px] transition-transform duration-300"
        style={{ transform: `translate3d(${mouse.x * 32}px, ${mouse.y * 26}px, 0)` }}
      />

      {/* Floating code tokens — pseudo-3D */}
      <div
        className="absolute inset-0"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute font-mono text-[11px] text-primary/30 dark:text-primary/40 select-none animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              transform: `translateZ(${p.z}px) translate3d(${mouse.x * (p.z / 12)}px, ${mouse.y * (p.z / 14)}px, 0)`,
              transition: "transform 220ms ease-out",
            }}
          >
            {p.text}
          </span>
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0 to-background/80" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Scan line */}
      <div
        className="absolute inset-x-0 h-px animate-scan"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--color-primary) 60%, transparent), transparent)",
          boxShadow: "0 0 12px color-mix(in oklab, var(--color-primary) 50%, transparent)",
        }}
      />
    </div>
  );
}
