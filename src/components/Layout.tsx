import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { useI18n } from "@/lib/i18n";
import { WhatsAppFab } from "./WhatsAppFab";

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <div className="border-t border-border bg-secondary/40 py-4 text-center text-sm text-muted-foreground">
        {t("brand")} © 2026. {t("footer_rights")}
      </div>
      <WhatsAppFab />
    </div>
  );
}
