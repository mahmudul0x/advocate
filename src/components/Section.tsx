import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-6">
        {(eyebrow || title || subtitle) && (
          <div className={`max-w-3xl mb-14 ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{eyebrow}</p>
            )}
            {title && <h2 className="text-4xl md:text-5xl font-display leading-tight">{title}</h2>}
            {subtitle && (
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-36 pb-16 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,oklch(0.78_0.13_85_/_0.3),transparent_50%)]" />
      <div className="container mx-auto px-6 relative">
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-5xl md:text-6xl max-w-4xl leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
