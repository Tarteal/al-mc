import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center text-white sm:px-8 md:px-12 md:py-24">
        <Reveal as="h1" className="font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </Reveal>
        {subtitle && (
          <Reveal as="p" delay={150} className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:mt-6 sm:text-lg md:text-xl">
            {subtitle}
          </Reveal>
        )}
        {children && (
          <Reveal delay={300} className="mt-8 flex flex-wrap justify-center gap-3">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
