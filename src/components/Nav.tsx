import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t("nav_home") },
    { to: "/hajj", label: t("nav_hajj") },
    { to: "/umrah", label: t("nav_umrah") },
    { to: "/ziyarah", label: t("nav_ziyarah") },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt={t("brand")}
            className={`h-11 w-11 rounded-full object-cover transition-all ${
              scrolled || open ? "ring-1 ring-border" : "ring-2 ring-white/70 shadow-lg"
            }`}
          />
          <span
            className={`hidden font-display text-lg font-semibold tracking-wide transition-colors sm:inline ${
              scrolled || open ? "text-foreground" : "text-white drop-shadow"
            }`}
          >
            {t("brand")}
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{
                className: scrolled ? "text-foreground/80" : "text-white/90 drop-shadow",
              }}
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="ms-2 rounded-full border border-primary/50 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Toggle language"
          >
            {t("lang_toggle")}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled || open ? "text-foreground" : "text-white"}`}
          aria-label="Open menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="py-3 text-base font-medium text-foreground/90 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLang(lang === "en" ? "ar" : "en");
                setOpen(false);
              }}
              className="mt-2 self-start rounded-full border border-primary/50 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {t("lang_toggle")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
