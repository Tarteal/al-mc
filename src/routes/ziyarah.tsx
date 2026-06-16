import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { PackageCard } from "@/components/PackageCard";
import { ziyarahPackages } from "@/lib/packages";
import { useI18n } from "@/lib/i18n";
import ziyarahAsset from "@/assets/imam-ali-shrine.png.asset.json";

const IMG = ziyarahAsset.url;

export const Route = createFileRoute("/ziyarah")({
  head: () => ({
    meta: [
      { title: "Ziyarah Tours — Al Mustafa Caravan" },
      {
        name: "description",
        content:
          "Visit the blessed shrines of Najaf, Karbala, Kadhimiya, and Samarra with knowledgeable scholar-guides and warm hospitality.",
      },
      { property: "og:title", content: "Ziyarah Tours — Al Mustafa Caravan" },
      { property: "og:image", content: IMG },
    ],
  }),
  component: ZiyarahPage,
});

function ZiyarahPage() {
  const { t } = useI18n();
  return (
    <Layout>
      <HeroSection
        image={IMG}
        title={t("ziyarah_page_title")}
        subtitle={t("ziyarah_page_subtitle")}
        minHeight="min-h-[60vh]"
      />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              {t("packages_title")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("packages_subtitle")}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ziyarahPackages.map((p) => (
              <PackageCard key={p.id} pkg={p} service="Ziyarah" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
