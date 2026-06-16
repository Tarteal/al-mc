import type { ReactNode } from "react";
import { Nav } from "./Nav";

import { WhatsAppFab } from "./WhatsAppFab";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      
      <WhatsAppFab />
    </div>
  );
}
