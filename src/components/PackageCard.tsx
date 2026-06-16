import { Check, MessageCircle } from "lucide-react";
import type { Package } from "@/lib/packages";
import { localized } from "@/lib/packages";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function PackageCard({ pkg, service }: { pkg: Package; service: string }) {
  const { t, lang } = useI18n();
  const name = localized(pkg.name, lang);
  const msg =
    lang === "ar"
      ? `السلام عليكم، أرغب في الاستفسار عن باقة ${service} - ${name} (ابتداءً من $${pkg.price.toLocaleString()}).`
      : `Assalamu Alaikum, I'd like to inquire about the ${service} - ${name} package (from $${pkg.price.toLocaleString()}).`;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 start-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {t("popular")}
        </span>
      )}
      <h3 className="font-display text-2xl text-foreground">{name}</h3>
      <div className="mt-3 space-y-1 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground/70">{t("duration")}:</span>{" "}
          {localized(pkg.duration, lang)}
        </p>
        <p>
          <span className="font-medium text-foreground/70">{t("hotel")}:</span>{" "}
          {localized(pkg.hotel, lang)}
        </p>
      </div>

      <div className="mt-5 border-y border-border py-4">
        <p className="text-sm text-muted-foreground">{t("from")}</p>
        <p className="mt-1 font-display text-4xl font-semibold text-primary">
          ${pkg.price.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">{t("per_person")}</p>
      </div>

      <div className="mt-5 flex-1">
        <p className="mb-3 text-sm font-semibold text-foreground">{t("includes")}:</p>
        <ul className="space-y-2 text-sm text-foreground/80">
          {localized(pkg.includes, lang).map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check size={16} className="mt-0.5 flex-shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={whatsappLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
      >
        <MessageCircle size={18} />
        {t("book_whatsapp")}
      </a>
    </div>
  );
}
