import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { PackageCard } from "@/components/PackageCard";
import { hajjPackages } from "@/lib/packages";
import { useI18n } from "@/lib/i18n";

const IMG =
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=2000&q=80";

export const Route = createFileRoute("/hajj")({
  head: () => ({
    meta: [
      { title: "Hajj Packages — Al Mustafa Caravan" },
      {
        name: "description",
        content:
          "Premium Hajj packages with 5★ accommodations near the Haram, scholar-led ziyarat, and trusted service from visa to return.",
      },
      { property: "og:title", content: "Hajj Packages — Al Mustafa Caravan" },
      { property: "og:image", content: IMG },
    ],
  }),
  component: HajjPage,
});

function HajjPage() {
  const { t } = useI18n();
  return (
    <Layout>
      <HeroSection
        image={IMG}
        title={t("hajj_page_title")}
        subtitle={t("hajj_page_subtitle")}
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
            {hajjPackages.map((p) => (
              <PackageCard key={p.id} pkg={p} service="Hajj" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
