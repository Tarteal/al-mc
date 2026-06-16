import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Al Mustafa Caravan" },
      {
        name: "description",
        content:
          "Hear from pilgrims around the world who have traveled with Al Mustafa Caravan for Hajj, Umrah, and Ziyarah.",
      },
      { property: "og:title", content: "Testimonials — Al Mustafa Caravan" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { t } = useI18n();
  return (
    <Layout>
      <section className="bg-cream pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl text-foreground sm:text-5xl">
              {t("testimonials_title")}
            </h1>
            <p className="mt-3 text-muted-foreground">{t("testimonials_subtitle")}</p>
          </div>
          <div className="mt-16">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>
    </Layout>
  );
}
