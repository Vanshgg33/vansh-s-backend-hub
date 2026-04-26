export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
