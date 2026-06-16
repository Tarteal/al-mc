import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Mustafa Caravan — Sacred Journeys for Hajj, Umrah & Ziyarah" },
      {
        name: "description",
        content:
          "Your Sacred Journey, Our Honored Responsibility. Trusted Hajj, Umrah, and Ziyarah packages with experienced scholars and premium accommodations.",
      },
      {
        property: "og:title",
        content: "Al Mustafa Caravan — Where Spiritual Dreams Become Reality",
      },
      {
        property: "og:description",
        content: "Your Sacred Journey, Our Honored Responsibility.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  }),
  component: Home,
});

import heroAsset from "@/assets/hero.png.asset.json";
const HERO_IMG = heroAsset.url;
const HAJJ_IMG =
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=2000&q=80";
const UMRAH_IMG =
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2000&q=80";
const ZIYARAH_IMG =
  "https://images.unsplash.com/photo-1604063155785-ca9bdc760287?auto=format&fit=crop&w=2000&q=80";

function Home() {
  const { t } = useI18n();

  return (
    <Layout>
      {/* Hero */}
      <HeroSection image={HERO_IMG} title={t("hero_title")} subtitle={t("hero_subtitle")}>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
        >
          {t("hero_cta")}
          <ArrowRight size={18} className="rtl:rotate-180" />
        </a>
      </HeroSection>

      <div id="services">
        <ServiceSection
          image={HAJJ_IMG}
          title={t("home_hajj_title")}
          description={t("home_hajj_desc")}
          cta={t("home_hajj_cta")}
          to="/hajj"
        />
        <ServiceSection
          image={UMRAH_IMG}
          title={t("home_umrah_title")}
          description={t("home_umrah_desc")}
          cta={t("home_umrah_cta")}
          to="/umrah"
          flip
        />
        <ServiceSection
          image={ZIYARAH_IMG}
          title={t("home_ziyarah_title")}
          description={t("home_ziyarah_desc")}
          cta={t("home_ziyarah_cta")}
          to="/ziyarah"
        />
      </div>
    </Layout>
  );
}

function ServiceSection({
  image,
  title,
  description,
  cta,
  to,
  flip,
}: {
  image: string;
  title: string;
  description: string;
  cta: string;
  to: "/hajj" | "/umrah" | "/ziyarah";
  flip?: boolean;
}) {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`absolute inset-0 ${
          flip
            ? "bg-gradient-to-l from-black/80 via-black/50 to-black/20"
            : "bg-gradient-to-r from-black/80 via-black/50 to-black/20"
        }`}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
        <div
          className={`max-w-xl text-white ${
            flip ? "ms-auto text-end" : "text-start"
          } fade-in-up`}
        >
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 text-base text-white/90 sm:text-lg">{description}</p>
          <Link
            to={to}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            {cta}
            <ArrowRight size={18} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
