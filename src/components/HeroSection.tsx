import type { ReactNode } from "react";

export function HeroSection({
  image,
  title,
  subtitle,
  children,
  minHeight = "min-h-screen",
}: {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  minHeight?: string;
}) {
  return (
    <section
      className={`relative flex ${minHeight} items-center justify-center overflow-hidden bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white fade-in-up">
        <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
