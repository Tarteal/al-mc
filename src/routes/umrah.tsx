import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { PackageCard } from "@/components/PackageCard";
import { umrahPackages } from "@/lib/packages";
import { useI18n } from "@/lib/i18n";

const IMG =
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/umrah")({
  head: () => ({
    meta: [
      { title: "Umrah Packages — Al Mustafa Caravan" },
      {
        name: "description",
        content:
          "Year-round Umrah journeys with comfortable hotels, smooth transfers, and serene experiences for individuals and families.",
      },
      { property: "og:title", content: "Umrah Packages — Al Mustafa Caravan" },
      { property: "og:image", content: IMG },
    ],
  }),
  component: UmrahPage,
});

function UmrahPage() {
  const { t } = useI18n();
  return (
    <Layout>
      <HeroSection
        image={IMG}
        title={t("umrah_page_title")}
        subtitle={t("umrah_page_subtitle")}
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
            {umrahPackages.map((p) => (
              <PackageCard key={p.id} pkg={p} service="Umrah" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
