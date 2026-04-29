export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={`mb-14 ${isCenter ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
      >
        <span className="h-px w-10 bg-primary/60" />
        <p className="chip-mono text-primary">{eyebrow}</p>
        <span className="h-px w-10 bg-primary/60" />
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tighter text-foreground">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
