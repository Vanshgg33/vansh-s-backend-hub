import { useRef, type ReactNode, type CSSProperties, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  liftOnHover?: boolean;
  style?: CSSProperties;
};

export function TiltCard({
  children,
  className,
  intensity = 10,
  glare = true,
  liftOnHover = true,
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    const rotY = px * intensity;
    const rotX = -py * intensity;

    node.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${
      liftOnHover ? 14 : 0
    }px)`;

    node.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    node.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "tilt-base relative",
        className,
      )}
      style={style}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [.tilt-base:hover_&]:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 50%)",
            mixBlendMode: "plus-lighter",
          }}
        />
      )}
    </div>
  );
}
