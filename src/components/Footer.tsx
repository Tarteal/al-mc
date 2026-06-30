import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt={t("brand")} className="h-12 w-12 rounded-full object-cover" />
              <h3 className="font-display text-2xl text-foreground">{t("brand")}</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t("footer_tagline")}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("nav_home")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/hajj" className="text-muted-foreground hover:text-primary">{t("nav_hajj")}</Link></li>
              <li><Link to="/umrah" className="text-muted-foreground hover:text-primary">{t("nav_umrah")}</Link></li>
              <li><Link to="/ziyarah" className="text-muted-foreground hover:text-primary">{t("nav_ziyarah")}</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary">{t("nav_testimonials")}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">{t("nav_contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("nav_contact")}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>+1 (313) 676-6662</li>
              <li>info@almustafacaravan.com</li>
              <li>123 Pilgrim Way, City, Country</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {t("brand")} © 2026. {t("footer_rights")}
        </div>
      </div>
    </footer>
  );
}
